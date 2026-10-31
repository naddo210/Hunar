import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SEO from '../../components/SEO';
import {
  Users,
  Search,
  Filter,
  Download,
  LogOut,
  Calendar,
  CheckCircle,
  Clock,
  Briefcase,
  AlertCircle,
  X,
  Send,
  MessageSquare,
  Sparkles,
  Layers,
  ChevronRight,
  RefreshCw,
} from 'lucide-react';

const STATUS_COLORS = {
  New: 'bg-stone-200 text-charcoal border-stone-300',
  Contacted: 'bg-blue-50 text-blue-800 border-blue-200',
  Qualified: 'bg-amber-50 text-amber-800 border-amber-200',
  'Proposal Sent': 'bg-purple-50 text-purple-800 border-purple-200',
  Won: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  Lost: 'bg-rose-50 text-rose-800 border-rose-200',
};

export default function AdminDashboard() {
  const { user, isAuthenticated, loading: authLoading, logout } = useAuth();
  const navigate = useNavigate();

  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);

  // Filters
  const [search, setSearch] = useState('');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total: 0, pages: 1 });

  // Lead modal editing states
  const [newStatus, setNewStatus] = useState('');
  const [statusReason, setStatusReason] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [followUpDate, setFollowUpDate] = useState('');
  const [savingAction, setSavingAction] = useState(false);

  // Protect route
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate('/admin/login', { replace: true });
    }
  }, [authLoading, isAuthenticated, navigate]);

  // Fetch KPI Stats
  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setStats(data.stats);
      }
    } catch (e) {
      console.warn('Error fetching stats:', e);
    }
  };

  // Fetch Leads List
  const fetchLeads = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        search,
        service: serviceFilter,
        status: statusFilter,
        page: String(page),
        limit: '20',
      });
      const res = await fetch(`/api/admin/leads?${params.toString()}`, {
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
        setPagination(data.pagination || { total: 0, pages: 1 });
      }
    } catch (e) {
      console.warn('Error fetching leads:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchStats();
      fetchLeads();
    }
  }, [isAuthenticated, search, serviceFilter, statusFilter, page]);

  // Open Lead Drawer
  const openLeadDetails = (lead) => {
    setSelectedLead(lead);
    setNewStatus(lead.status);
    setStatusReason('');
    setNoteContent('');
    setFollowUpDate(lead.followUpDate ? new Date(lead.followUpDate).toISOString().split('T')[0] : '');
  };

  // Update Status
  const handleUpdateStatus = async () => {
    if (!selectedLead || !newStatus) return;
    setSavingAction(true);
    try {
      const res = await fetch(`/api/admin/leads/${selectedLead._id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ status: newStatus, reason: statusReason }),
      });
      if (res.ok) {
        const data = await res.json();
        setSelectedLead(data.lead);
        setStatusReason('');
        fetchLeads();
        fetchStats();
      }
    } catch (e) {
      console.warn('Status update error:', e);
    } finally {
      setSavingAction(false);
    }
  };

  // Add Note
  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!selectedLead || !noteContent.trim()) return;
    setSavingAction(true);
    try {
      const res = await fetch(`/api/admin/leads/${selectedLead._id}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ content: noteContent }),
      });
      if (res.ok) {
        const data = await res.json();
        setSelectedLead(data.lead);
        setNoteContent('');
        fetchLeads();
      }
    } catch (e) {
      console.warn('Note save error:', e);
    } finally {
      setSavingAction(false);
    }
  };

  // Save Follow-Up Date
  const handleSaveFollowUp = async () => {
    if (!selectedLead) return;
    setSavingAction(true);
    try {
      const res = await fetch(`/api/admin/leads/${selectedLead._id}/follow-up`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ followUpDate }),
      });
      if (res.ok) {
        const data = await res.json();
        setSelectedLead(data.lead);
        fetchLeads();
      }
    } catch (e) {
      console.warn('Follow-up save error:', e);
    } finally {
      setSavingAction(false);
    }
  };

  // CSV Export
  const handleExportCSV = () => {
    window.location.href = '/api/admin/leads/export';
  };

  if (authLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <p className="text-sm font-serif text-emerald">Verifying credentials...</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="CRM & Lead Management — HUNAR Studio Admin"
        description="Protected administrative CRM dashboard for managing studio commissions and tracking attribution."
      />

      <div className="min-h-screen bg-cream pb-20">
        {/* Top Bar */}
        <div className="bg-emerald text-cream px-4 sm:px-8 py-4 flex items-center justify-between border-b border-emerald-dark">
          <div className="flex items-center gap-3">
            <h1 className="font-serif text-xl font-medium tracking-wide">HUNAR CRM</h1>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-emerald-dark text-beige rounded">
              Director Console
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline text-cream/80">
              Signed in as <strong className="text-cream">{user?.fullName || user?.email}</strong>
            </span>
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-dark/70 hover:bg-emerald-dark text-cream border border-beige/30 rounded transition"
            >
              <Download className="w-3.5 h-3.5 text-beige" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-olive hover:bg-olive/90 text-white rounded transition shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {/* KPI Statistics */}
          {stats && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              <div className="p-4 bg-white border border-beige/70 rounded shadow-card">
                <span className="text-[10px] uppercase font-semibold text-charcoal/60 tracking-wider">Total Leads</span>
                <p className="font-serif text-3xl text-emerald font-medium mt-1">{stats.total}</p>
              </div>
              <div className="p-4 bg-white border border-beige/70 rounded shadow-card">
                <span className="text-[10px] uppercase font-semibold text-charcoal/60 tracking-wider">New Enquiries</span>
                <p className="font-serif text-3xl text-emerald font-medium mt-1">{stats.new}</p>
              </div>
              <div className="p-4 bg-white border border-beige/70 rounded shadow-card">
                <span className="text-[10px] uppercase font-semibold text-charcoal/60 tracking-wider">Contacted</span>
                <p className="font-serif text-3xl text-olive font-medium mt-1">{stats.contacted}</p>
              </div>
              <div className="p-4 bg-white border border-beige/70 rounded shadow-card">
                <span className="text-[10px] uppercase font-semibold text-charcoal/60 tracking-wider">Proposal Sent</span>
                <p className="font-serif text-3xl text-charcoal font-medium mt-1">{stats.proposalSent}</p>
              </div>
              <div className="p-4 bg-white border border-beige/70 rounded shadow-card">
                <span className="text-[10px] uppercase font-semibold text-charcoal/60 tracking-wider">Won Commissions</span>
                <p className="font-serif text-3xl text-emerald font-medium mt-1">{stats.won}</p>
              </div>
              <div className="p-4 bg-white border border-beige/70 rounded shadow-card">
                <span className="text-[10px] uppercase font-semibold text-charcoal/60 tracking-wider">Win Rate</span>
                <p className="font-serif text-3xl text-olive font-medium mt-1">{stats.conversionRate}</p>
              </div>
            </div>
          )}

          {/* Search & Filters */}
          <div className="bg-white p-4 rounded border border-beige/70 mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-card">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search leads by name, email, or lead #..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full pl-9 pr-3 py-2 text-xs bg-cream/40 border border-beige/70 text-charcoal rounded focus:bg-white focus:border-emerald focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <select
                value={serviceFilter}
                onChange={(e) => {
                  setServiceFilter(e.target.value);
                  setPage(1);
                }}
                className="text-xs px-3 py-2 bg-cream/40 border border-beige/70 text-charcoal rounded focus:border-emerald focus:outline-none cursor-pointer"
              >
                <option value="all">All Services</option>
                <option value="branding">Branding</option>
                <option value="website-development">Website Development</option>
                <option value="custom-art">Custom Art</option>
                <option value="art-products">Art Prints</option>
                <option value="digital-content">Digital Content</option>
                <option value="murals">Murals</option>
                <option value="creative-products">Creative Products</option>
                <option value="art-classes">Art Classes</option>
                <option value="general">General</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setPage(1);
                }}
                className="text-xs px-3 py-2 bg-cream/40 border border-beige/70 text-charcoal rounded focus:border-emerald focus:outline-none cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Won">Won</option>
                <option value="Lost">Lost</option>
              </select>

              <button
                onClick={() => {
                  fetchLeads();
                  fetchStats();
                }}
                className="p-2 border border-beige/70 hover:border-emerald rounded text-charcoal transition"
                title="Refresh leads"
              >
                <RefreshCw className="w-3.5 h-3.5 text-olive" />
              </button>
            </div>
          </div>

          {/* Leads Data Table */}
          <div className="bg-white border border-beige/70 rounded shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-cream/60 text-charcoal uppercase tracking-wider font-semibold border-b border-beige/60">
                  <tr>
                    <th className="py-3 px-4">Lead #</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Client Name</th>
                    <th className="py-3 px-4">Service</th>
                    <th className="py-3 px-4">Traffic / Source</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Follow-Up</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-beige/40">
                  {loading ? (
                    <tr>
                      <td colSpan={8} className="py-12 text-center text-charcoal/60">
                        Retrieving studio enquiries...
                      </td>
                    </tr>
                  ) : leads.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-12 text-center text-charcoal/60">
                        No enquiries match the current filter criteria.
                      </td>
                    </tr>
                  ) : (
                    leads.map((lead) => {
                      const statusClass = STATUS_COLORS[lead.status] || 'bg-cream text-charcoal';
                      return (
                        <tr
                          key={lead._id}
                          onClick={() => openLeadDetails(lead)}
                          className="hover:bg-cream/50 transition cursor-pointer"
                        >
                          <td className="py-3 px-4 font-mono font-semibold text-emerald">
                            {lead.leadNumber}
                          </td>
                          <td className="py-3 px-4 text-charcoal/60">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <span className="font-semibold text-charcoal block">{lead.fullName}</span>
                            <span className="text-charcoal/50 text-[11px] block">{lead.email}</span>
                          </td>
                          <td className="py-3 px-4 text-charcoal/80 capitalize">
                            {lead.serviceCategory.replace('-', ' ')}
                          </td>
                          <td className="py-3 px-4">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-cream border border-beige/40 text-charcoal">
                              {lead.firstTouch?.trafficCategory || 'Direct'}
                            </span>
                            {lead.firstTouch?.utm?.source && (
                              <span className="text-[10px] text-charcoal/50 block mt-0.5 font-mono">
                                utm: {lead.firstTouch.utm.source}
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold border ${statusClass}`}
                            >
                              {lead.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-charcoal/60">
                            {lead.followUpDate ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-mono">
                                <Calendar className="w-3 h-3 text-olive" />
                                {new Date(lead.followUpDate).toISOString().split('T')[0]}
                              </span>
                            ) : (
                              <span className="text-charcoal/30">—</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openLeadDetails(lead);
                              }}
                              className="text-[11px] text-emerald hover:text-olive hover:underline font-semibold"
                            >
                              Inspect →
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="p-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                <span>
                  Showing page {pagination.page} of {pagination.pages} ({pagination.total} leads total)
                </span>
                <div className="flex items-center gap-2">
                  <button
                    disabled={page <= 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className="px-3 py-1 border border-stone-300 rounded disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    disabled={page >= pagination.pages}
                    onClick={() => setPage((p) => p + 1)}
                    className="px-3 py-1 border border-stone-300 rounded disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lead Detail & Attribution Drawer */}
        {selectedLead && (
          <div className="fixed inset-0 z-50 overflow-hidden bg-charcoal/40 backdrop-blur-sm flex justify-end">
            <div className="w-full max-w-2xl bg-white h-full shadow-elevated border-l border-beige/70 overflow-y-auto flex flex-col justify-between p-6 sm:p-8">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between pb-4 border-b border-beige/60">
                  <div>
                    <span className="editorial-eyebrow">Lead Dossier</span>
                    <h2 className="font-serif text-3xl text-emerald font-medium mt-1">
                      {selectedLead.fullName}
                    </h2>
                    <p className="font-mono text-xs text-emerald font-semibold mt-0.5">
                      {selectedLead.leadNumber} • {new Date(selectedLead.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="p-2 text-charcoal/60 hover:text-emerald rounded"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Status & Follow-Up Toolbar */}
                <div className="p-4 bg-cream/40 border border-beige/60 rounded grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-semibold text-charcoal/60 mb-1">
                      Update Pipeline Status
                    </label>
                    <div className="flex items-center gap-2">
                      <select
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                        className="text-xs px-3 py-1.5 bg-white border border-beige/70 rounded focus:border-emerald focus:outline-none flex-1"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Qualified">Qualified</option>
                        <option value="Proposal Sent">Proposal Sent</option>
                        <option value="Won">Won</option>
                        <option value="Lost">Lost</option>
                      </select>
                      <button
                        onClick={handleUpdateStatus}
                        disabled={savingAction || newStatus === selectedLead.status}
                        className="text-xs uppercase px-3 py-1.5 bg-emerald hover:bg-emerald-dark text-cream rounded font-semibold disabled:opacity-40 transition shadow-sm"
                      >
                        Save
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-semibold text-charcoal/60 mb-1">
                      Follow-Up Date
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="date"
                        value={followUpDate}
                        onChange={(e) => setFollowUpDate(e.target.value)}
                        className="text-xs px-2.5 py-1.5 bg-white border border-beige/70 rounded focus:border-emerald focus:outline-none flex-1"
                      />
                      <button
                        onClick={handleSaveFollowUp}
                        disabled={savingAction}
                        className="text-xs uppercase px-3 py-1.5 bg-emerald hover:bg-emerald-dark text-cream rounded font-semibold disabled:opacity-40 transition shadow-sm"
                      >
                        Set
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact & Project Details */}
                <div className="space-y-3">
                  <h3 className="font-serif text-lg text-emerald font-medium">Customer Information</h3>
                  <div className="grid grid-cols-2 gap-3 text-xs bg-white p-4 border border-beige/60 rounded">
                    <div>
                      <span className="text-charcoal/50 block">Email Address:</span>
                      <a href={`mailto:${selectedLead.email}`} className="text-emerald font-medium hover:underline hover:text-olive">
                        {selectedLead.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-charcoal/50 block">Telephone / WhatsApp:</span>
                      <span className="text-charcoal font-medium">{selectedLead.phone || 'Not supplied'}</span>
                    </div>
                    <div>
                      <span className="text-charcoal/50 block">Organization:</span>
                      <span className="text-charcoal font-medium">{selectedLead.organization || 'Independent Patron'}</span>
                    </div>
                    <div>
                      <span className="text-charcoal/50 block">Submitted From Page:</span>
                      <span className="text-charcoal font-medium">{selectedLead.submittedFromPage}</span>
                    </div>
                  </div>
                </div>

                {/* Scope & Brief */}
                <div className="space-y-3">
                  <h3 className="font-serif text-lg text-emerald font-medium">Project Scope & Brief</h3>
                  <div className="bg-white p-4 border border-beige/60 rounded space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-beige/40 pb-2">
                      <span><strong>Service Discipline:</strong> {selectedLead.serviceCategory}</span>
                      <span><strong>Budget:</strong> {selectedLead.estimatedBudget || 'Undisclosed'}</span>
                      <span><strong>Timeline:</strong> {selectedLead.preferredTimeline || 'Flexible'}</span>
                    </div>
                    <div>
                      <span className="text-charcoal/50 block mb-1">Patron's Brief / Message:</span>
                      <p className="text-charcoal leading-relaxed whitespace-pre-wrap font-light bg-cream/30 border border-beige/40 p-3 rounded">
                        {selectedLead.projectDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comprehensive Attribution Inspector */}
                <div className="space-y-3">
                  <h3 className="font-serif text-lg text-emerald font-medium flex items-center justify-between">
                    <span>Attribution & Journey Inspector</span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-cream border border-beige/40 rounded text-charcoal/70">
                      Multi-Touch Model
                    </span>
                  </h3>

                  <div className="bg-white p-4 border border-beige/60 rounded text-xs space-y-4">
                    {/* Visitor & Device */}
                    <div className="grid grid-cols-3 gap-2 pb-3 border-b border-beige/40 font-mono text-[11px]">
                      <div>
                        <span className="text-charcoal/50 block">Visitor Type:</span>
                        <span className="capitalize font-semibold text-charcoal">{selectedLead.visitor?.type || 'new'}</span>
                      </div>
                      <div>
                        <span className="text-charcoal/50 block">Device:</span>
                        <span className="capitalize font-semibold text-charcoal">{selectedLead.visitor?.device || 'desktop'}</span>
                      </div>
                      <div>
                        <span className="text-charcoal/50 block">Location (CDN):</span>
                        <span className="font-semibold text-charcoal">
                          {selectedLead.visitor?.city ? `${selectedLead.visitor.city}, ` : ''}{selectedLead.visitor?.country || 'Unknown'}
                        </span>
                      </div>
                    </div>

                    {/* First-Touch vs Last-Touch Side-by-Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* First Touch */}
                      <div className="p-3 bg-cream/30 rounded border border-beige/50 space-y-1.5 text-[11px]">
                        <span className="font-semibold text-emerald uppercase tracking-wider block text-[10px]">
                          First Touch (Initial Landing)
                        </span>
                        <p><span className="text-charcoal/50">Traffic Category:</span> {selectedLead.firstTouch?.trafficCategory || 'Direct'}</p>
                        <p className="truncate"><span className="text-charcoal/50">Landing URL:</span> {selectedLead.firstTouch?.landingPage}</p>
                        <p className="truncate"><span className="text-charcoal/50">Referrer:</span> {selectedLead.firstTouch?.referrer || 'None'}</p>
                        <p><span className="text-charcoal/50">UTM Source:</span> {selectedLead.firstTouch?.utm?.source || '—'}</p>
                        <p><span className="text-charcoal/50">UTM Medium:</span> {selectedLead.firstTouch?.utm?.medium || '—'}</p>
                        <p><span className="text-charcoal/50">UTM Campaign:</span> {selectedLead.firstTouch?.utm?.campaign || '—'}</p>
                        {selectedLead.firstTouch?.clickIds?.gclid && (
                          <p className="text-emerald font-mono truncate">gclid: {selectedLead.firstTouch.clickIds.gclid}</p>
                        )}
                        {selectedLead.firstTouch?.clickIds?.fbclid && (
                          <p className="text-olive font-mono truncate">fbclid: {selectedLead.firstTouch.clickIds.fbclid}</p>
                        )}
                      </div>

                      {/* Last Touch */}
                      <div className="p-3 bg-cream/30 rounded border border-beige/50 space-y-1.5 text-[11px]">
                        <span className="font-semibold text-emerald uppercase tracking-wider block text-[10px]">
                          Last Touch (Form Conversion)
                        </span>
                        <p><span className="text-charcoal/50">Traffic Category:</span> {selectedLead.lastTouch?.trafficCategory || 'Direct'}</p>
                        <p className="truncate"><span className="text-charcoal/50">Conversion Page:</span> {selectedLead.lastTouch?.page}</p>
                        <p className="truncate"><span className="text-charcoal/50">Referrer:</span> {selectedLead.lastTouch?.referrer || 'None'}</p>
                        <p><span className="text-charcoal/50">UTM Source:</span> {selectedLead.lastTouch?.utm?.source || '—'}</p>
                        <p><span className="text-charcoal/50">UTM Medium:</span> {selectedLead.lastTouch?.utm?.medium || '—'}</p>
                        <p><span className="text-charcoal/50">UTM Campaign:</span> {selectedLead.lastTouch?.utm?.campaign || '—'}</p>
                        {selectedLead.lastTouch?.clickIds?.gclid && (
                          <p className="text-emerald font-mono truncate">gclid: {selectedLead.lastTouch.clickIds.gclid}</p>
                        )}
                        {selectedLead.lastTouch?.clickIds?.fbclid && (
                          <p className="text-olive font-mono truncate">fbclid: {selectedLead.lastTouch.clickIds.fbclid}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Internal Notes Timeline */}
                <div className="space-y-3">
                  <h3 className="font-serif text-lg text-emerald font-medium">Internal Notes & History</h3>

                  <form onSubmit={handleAddNote} className="space-y-2">
                    <textarea
                      rows={2}
                      placeholder="Add an internal studio note (e.g. Sent sample pigments to client)..."
                      value={noteContent}
                      onChange={(e) => setNoteContent(e.target.value)}
                      className="w-full p-2.5 text-xs bg-white border border-beige/70 rounded focus:border-emerald focus:outline-none"
                    />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={savingAction || !noteContent.trim()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-wider font-semibold rounded disabled:opacity-40 transition shadow-sm"
                      >
                        <Send className="w-3 h-3 text-beige" />
                        <span>Record Note</span>
                      </button>
                    </div>
                  </form>

                  <div className="space-y-2 max-h-48 overflow-y-auto pt-2">
                    {selectedLead.internalNotes && selectedLead.internalNotes.length > 0 ? (
                      selectedLead.internalNotes.map((note, idx) => (
                        <div key={idx} className="p-3 bg-white border border-beige/60 rounded text-xs">
                          <div className="flex items-center justify-between text-[10px] text-charcoal/50 mb-1">
                            <span className="font-semibold text-emerald">{note.author}</span>
                            <span>{new Date(note.createdAt).toLocaleString()}</span>
                          </div>
                          <p className="text-charcoal/80">{note.content}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-charcoal/50 italic">No internal notes logged yet.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Close Drawer Footer */}
              <div className="pt-6 border-t border-beige/60 flex justify-end">
                <button
                  onClick={() => setSelectedLead(null)}
                  className="px-5 py-2 text-xs uppercase tracking-wider font-semibold border border-beige/70 hover:border-emerald text-charcoal hover:text-emerald rounded transition"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

