"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  CreditCard,
  Wallet,
  BadgeDollarSign,
  CircleDollarSign,
  CheckCircle2,
  Clock3,
  XCircle,
  RefreshCcw,
  Eye,
} from "lucide-react";

export default function AdminTransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);

    
        const res = await fetch("/api/admin/transactions", {
          cache: "no-store",
        });

        const data = await res.json();

        if (Array.isArray(data?.transactions)) {
          setTransactions(data.transactions);
        }
        else if (Array.isArray(data)) {
          setTransactions(data);
        } else {
          setTransactions([]);
        }
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  // =========================
  // FILTERED DATA
  // =========================
  const filteredTransactions = useMemo(() => {
    return transactions.filter((item) => {
      const searchValue = searchText.toLowerCase();

      const matchesSearch =
        item?.transactionId?.toLowerCase().includes(searchValue) ||
        item?.buyerName?.toLowerCase().includes(searchValue) ||
        item?.buyerEmail?.toLowerCase().includes(searchValue) ||
        item?.propertyTitle?.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "all"
          ? true
          : item?.status?.toLowerCase() === statusFilter.toLowerCase();

      const matchesMethod =
        methodFilter === "all"
          ? true
          : item?.paymentMethod?.toLowerCase() === methodFilter.toLowerCase();

      return matchesSearch && matchesStatus && matchesMethod;
    });
  }, [transactions, searchText, statusFilter, methodFilter]);

  // =========================
  // SUMMARY DATA
  // =========================
  const totalTransactions = transactions.length;

  const totalRevenue = transactions.reduce(
    (sum, item) => sum + Number(item?.amount || 0),
    0
  );

  const paidTransactions = transactions.filter(
    (item) => item?.status?.toLowerCase() === "paid"
  ).length;

  const pendingTransactions = transactions.filter(
    (item) => item?.status?.toLowerCase() === "pending"
  ).length;

  // =========================
  // HELPERS
  // =========================
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-BD", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusStyle = (status) => {
    const value = status?.toLowerCase();

    if (value === "paid") {
      return "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20";
    }
    if (value === "pending") {
      return "bg-amber-500/15 text-amber-400 border border-amber-500/20";
    }
    if (value === "failed") {
      return "bg-rose-500/15 text-rose-400 border border-rose-500/20";
    }
    if (value === "refunded") {
      return "bg-sky-500/15 text-sky-400 border border-sky-500/20";
    }

    return "bg-slate-500/15 text-slate-300 border border-slate-500/20";
  };

  const getStatusIcon = (status) => {
    const value = status?.toLowerCase();

    if (value === "paid") return <CheckCircle2 size={14} />;
    if (value === "pending") return <Clock3 size={14} />;
    if (value === "failed") return <XCircle size={14} />;
    if (value === "refunded") return <RefreshCcw size={14} />;

    return <Clock3 size={14} />;
  };

  return (
    <section className="min-h-screen bg-[#050816] text-white px-4 md:px-6 py-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
              Admin Panel
            </p>
            <h1 className="text-2xl md:text-4xl font-bold mt-2">
              Transactions Management
            </h1>
            <p className="text-slate-400 mt-2 max-w-2xl">
              All property booking payments, purchase records, and transaction
              history in one place.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition">
              Export Report
            </button>
          </div>
        </div>

        {/* ================= SUMMARY CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <SummaryCard
            title="Total Transactions"
            value={totalTransactions}
            icon={<CreditCard size={20} />}
            glow="from-cyan-500/20 to-blue-500/10"
          />
          <SummaryCard
            title="Total Revenue"
            value={formatCurrency(totalRevenue)}
            icon={<CircleDollarSign size={20} />}
            glow="from-emerald-500/20 to-green-500/10"
          />
          <SummaryCard
            title="Paid Payments"
            value={paidTransactions}
            icon={<BadgeDollarSign size={20} />}
            glow="from-violet-500/20 to-fuchsia-500/10"
          />
          <SummaryCard
            title="Pending Payments"
            value={pendingTransactions}
            icon={<Wallet size={20} />}
            glow="from-amber-500/20 to-orange-500/10"
          />
        </div>

        {/* ================= FILTER BAR ================= */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Search */}
            <div className="lg:col-span-6">
              <label className="text-sm text-slate-300 mb-2 block">
                Search transaction
              </label>
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search by transaction ID, buyer, email, property..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full rounded-2xl bg-[#0c1222] border border-white/10 pl-11 pr-4 py-3 outline-none focus:border-cyan-500 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Status */}
            <div className="lg:col-span-3">
              <label className="text-sm text-slate-300 mb-2 block">
                Filter by status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full rounded-2xl bg-[#0c1222] border border-white/10 px-4 py-3 outline-none focus:border-cyan-500 text-white"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
                <option value="refunded">Refunded</option>
              </select>
            </div>

            {/* Payment Method */}
            <div className="lg:col-span-3">
              <label className="text-sm text-slate-300 mb-2 block">
                Payment method
              </label>
              <select
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
                className="w-full rounded-2xl bg-[#0c1222] border border-white/10 px-4 py-3 outline-none focus:border-cyan-500 text-white"
              >
                <option value="all">All Methods</option>
                <option value="card">Card</option>
                <option value="bkash">bKash</option>
                <option value="nagad">Nagad</option>
                <option value="bank">Bank</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between px-5 md:px-6 py-5 border-b border-white/10">
            <div>
              <h2 className="text-lg md:text-xl font-semibold">
                Transaction History
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Total filtered results: {filteredTransactions.length}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="p-10">
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-16 rounded-2xl bg-white/5 animate-pulse"
                  />
                ))}
              </div>
            </div>
          ) : filteredTransactions.length === 0 ? (
            <div className="py-20 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                  <CreditCard size={28} />
                </div>
                <h3 className="text-xl font-semibold">No transactions found</h3>
                <p className="text-slate-400 mt-2">
                  Try changing the search keyword or filter options.
                </p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1200px]">
                <thead className="bg-white/[0.03]">
                  <tr className="text-left text-sm text-slate-300">
                    <th className="px-6 py-4 font-semibold">Transaction ID</th>
                    <th className="px-6 py-4 font-semibold">Buyer</th>
                    <th className="px-6 py-4 font-semibold">Property</th>
                    <th className="px-6 py-4 font-semibold">Amount</th>
                    <th className="px-6 py-4 font-semibold">Method</th>
                    <th className="px-6 py-4 font-semibold">Date</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-center">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTransactions.map((item) => (
                    <tr
                      key={item._id || item.transactionId}
                      className="border-t border-white/10 hover:bg-white/[0.03] transition"
                    >
                      {/* Transaction ID */}
                      <td className="px-6 py-5">
                        <div className="space-y-1">
                          <p className="font-semibold text-white">
                            {item?.transactionId || "N/A"}
                          </p>
                          <p className="text-xs text-slate-400">
                            Invoice: {item?.invoiceId || "N/A"}
                          </p>
                        </div>
                      </td>

                      {/* Buyer */}
                      <td className="px-6 py-5">
                        <div className="space-y-1">
                          <p className="font-medium text-white">
                            {item?.buyerName || "Unknown User"}
                          </p>
                          <p className="text-sm text-slate-400">
                            {item?.buyerEmail || "No Email"}
                          </p>
                        </div>
                      </td>

                      {/* Property */}
                      <td className="px-6 py-5">
                        <div className="max-w-[260px]">
                          <p className="font-medium text-white line-clamp-1">
                            {item?.propertyTitle || "Property Not Found"}
                          </p>
                          <p className="text-sm text-slate-400 mt-1 line-clamp-1">
                            {item?.propertyLocation || "No location"}
                          </p>
                        </div>
                      </td>

                      {/* Amount */}
                      <td className="px-6 py-5">
                        <p className="font-semibold text-emerald-400">
                          {formatCurrency(item?.amount)}
                        </p>
                      </td>

                      {/* Method */}
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200 capitalize">
                          <Wallet size={14} />
                          {item?.paymentMethod || "N/A"}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-5 text-slate-300">
                        {formatDate(item?.paidAt || item?.createdAt)}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium capitalize ${getStatusStyle(
                            item?.status
                          )}`}
                        >
                          {getStatusIcon(item?.status)}
                          {item?.status || "unknown"}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-2">
                          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition">
                            <Eye size={16} />
                            View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================
   SUMMARY CARD COMPONENT
========================= */
function SummaryCard({ title, value, icon, glow }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${glow} opacity-70 pointer-events-none`}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-3">{value}</h3>
        </div>

        <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-400">
          {icon}
        </div>
      </div>
    </div>
  );
}