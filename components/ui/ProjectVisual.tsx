"use client";

import React, { useState, useEffect } from "react";
import { 
  Terminal, Database, Layout, Play, RefreshCw, Check, 
  Lock, Code, FileText, User, ShoppingCart, 
  FolderTree, AlertTriangle, Layers, DollarSign 
} from "lucide-react";

interface ProjectVisualProps {
  projectId: string;
  image?: string;
  title: string;
}

export default function ProjectVisual({ projectId, image, title }: ProjectVisualProps) {
  // Local state for some dynamic animation effects
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [posSyncState, setPosSyncState] = useState<"offline" | "syncing" | "synced">("offline");
  const [posCacheCount, setPosCacheCount] = useState(3);
  const [bookingTime, setBookingTime] = useState("");

  // Set up animation loops for mockups
  useEffect(() => {
    if (projectId === "payment-gateway") {
      const logs = [
        "redis-cli SET payment_lock:tx_98231 NX PX 5000 -> OK",
        "[INFO] Distributed lock acquired on tx_98231",
        "[DB] Transaction initiated in isolation level SERIALIZABLE",
        "[POST] Requesting api.bkash.com/v2/payment/execute...",
        "[RESPONSE] 200 OK | status: SUCCESS | trxID: BK872A1",
        "redis-cli DEL payment_lock:tx_98231 -> (integer) 1",
        "[SUCCESS] Lock released. Transaction finality achieved in 184ms"
      ];
      let currentIdx = 0;
      setTerminalLogs([logs[0]]);
      
      const interval = setInterval(() => {
        currentIdx = (currentIdx + 1) % (logs.length + 1);
        if (currentIdx === 0) {
          setTerminalLogs([logs[0]]);
        } else {
          setTerminalLogs(logs.slice(0, currentIdx));
        }
      }, 2000);
      return () => clearInterval(interval);
    }

    if (projectId === "pos") {
      const interval = setInterval(() => {
        setPosSyncState((prev) => {
          if (prev === "offline") {
            return "syncing";
          } else if (prev === "syncing") {
            setPosCacheCount(0);
            return "synced";
          } else {
            setPosCacheCount(3);
            return "offline";
          }
        });
      }, 5000);
      return () => clearInterval(interval);
    }

    if (projectId === "kodersolution") {
      const times = ["10:00 AM", "02:30 PM", "11:15 AM", "04:00 PM"];
      let currentIdx = 0;
      setBookingTime(times[0]);
      const interval = setInterval(() => {
        currentIdx = (currentIdx + 1) % times.length;
        setBookingTime(times[currentIdx]);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [projectId]);

  // Fallback to image if a valid URL is provided
  if (image && image.trim() !== "") {
    return (
      <div className="w-full h-full relative overflow-hidden bg-slate-950">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  // Helper template for mockup cards
  const WindowFrame = ({ children, titleText, icon: Icon }: { children: React.ReactNode; titleText: string; icon: any }) => (
    <div className="w-full h-full bg-[#0F172A] border border-slate-800 rounded-xl overflow-hidden flex flex-col font-sans select-none text-xs text-slate-400">
      {/* Header bar */}
      <div className="bg-[#1E293B] border-b border-slate-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
          <span className="ml-2 font-mono text-[10px] tracking-tight text-slate-300 font-bold">{titleText}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <Icon size={12} />
        </div>
      </div>
      {/* Body */}
      <div className="flex-1 p-4 overflow-hidden relative flex flex-col">
        {children}
      </div>
    </div>
  );

  // Render specific mockup based on ID
  switch (projectId) {
    case "payment-gateway":
      return (
        <WindowFrame titleText="terminal://payment-gateway-redis" icon={Terminal}>
          <div className="font-mono text-[11px] leading-relaxed text-blue-400 flex-1 overflow-y-auto">
            {terminalLogs.map((log, idx) => (
              <div 
                key={idx} 
                className={`${
                  log.startsWith("redis-cli") 
                    ? "text-slate-400" 
                    : log.includes("SUCCESS") 
                    ? "text-emerald-400 font-bold" 
                    : log.includes("Error") 
                    ? "text-rose-500" 
                    : "text-slate-300"
                }`}
              >
                {log.startsWith("redis-cli") ? "$ " : ""}
                {log}
              </div>
            ))}
            <div className="w-2 h-4 bg-slate-400 inline-block animate-pulse ml-0.5 mt-1" />
          </div>
          <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-500"><Lock size={10} /> HMAC Signature Verified</span>
            <span>Latency: 184ms</span>
          </div>
        </WindowFrame>
      );

    case "school":
      return (
        <WindowFrame titleText="app://school-scheduler" icon={Layers}>
          <div className="flex flex-col gap-3 flex-1">
            {/* School statistics summary */}
            <div className="grid grid-cols-3 gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800/60">
              <div>
                <p className="text-[9px] text-slate-400 uppercase font-black">Students</p>
                <p className="text-sm font-bold text-white">1,420</p>
              </div>
              <div>
                <p className="text-[9px] text-slate-400 uppercase font-black">Sync Rate</p>
                <p className="text-sm font-bold text-blue-400">96.4%</p>
              </div>
              <div>
                <p className="text-[9px] text-slate-400 uppercase font-black">Queued PDFs</p>
                <p className="text-sm font-bold text-emerald-400">0</p>
              </div>
            </div>
            {/* Custom collision checker tree */}
            <div className="space-y-1.5">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Schedules Validation</p>
              <div className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <span className="font-mono">Math 101 (Room 4B)</span>
                <span className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold rounded text-[8px]">CONFLICT FREE</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <span className="font-mono">Physics 202 (Lab A)</span>
                <span className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold rounded text-[8px]">CONFLICT FREE</span>
              </div>
            </div>
          </div>
        </WindowFrame>
      );

    case "hrm":
      return (
        <WindowFrame titleText="db://hrm-payroll-audit" icon={Database}>
          <div className="flex flex-col gap-3 flex-1 justify-between">
            {/* Encrypted DB field representation */}
            <div className="space-y-1.5">
              <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Active Salary Query</p>
              <div className="font-mono bg-slate-900/80 p-2 rounded border border-slate-800 text-[10px] text-slate-300 space-y-1 leading-normal">
                <p className="text-blue-400"><span className="text-purple-400">SELECT</span> name, salary_hash <span className="text-purple-400">FROM</span> employees</p>
                <p className="text-slate-400">// AES-256 Cryptographic Output</p>
                <p className="text-yellow-500/90 truncate">0x8F3D129C... (Arif R.)</p>
                <p className="text-yellow-500/90 truncate">0x9E7F44B2... (Tariqul I.)</p>
              </div>
            </div>
            {/* Audit logger status */}
            <div className="p-2 rounded bg-blue-500/5 border border-blue-500/10 text-blue-400 font-mono text-[9px] flex items-center justify-between">
              <span className="flex items-center gap-1"><Check size={10} /> Blind index search matched.</span>
              <span className="text-slate-400">Log: Saved</span>
            </div>
          </div>
        </WindowFrame>
      );

    case "garments-erp":
      return (
        <WindowFrame titleText="pipeline://textile-supply-chain" icon={Layers}>
          <div className="flex flex-col gap-3 flex-1 justify-between">
            <div className="grid grid-cols-3 gap-2 flex-1">
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800/80 flex flex-col justify-between">
                <span className="text-[8px] font-black uppercase text-slate-400">Procurement</span>
                <span className="font-mono text-[10px] text-slate-300">FAB-COT-01</span>
                <span className="text-[8px] text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-1 rounded w-max mt-1 font-bold">IN STORAGE</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800/80 flex flex-col justify-between">
                <span className="text-[8px] font-black uppercase text-slate-400">Dyeing Line</span>
                <span className="font-mono text-[10px] text-slate-300">TSH-BLU-42</span>
                <span className="text-[8px] text-amber-400 bg-amber-500/5 border border-amber-500/10 px-1 rounded w-max mt-1 font-bold">IN DYE BATH</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800/80 flex flex-col justify-between">
                <span className="text-[8px] font-black uppercase text-slate-400">Shipping</span>
                <span className="font-mono text-[10px] text-slate-300">EXP-MUM-08</span>
                <span className="text-[8px] text-blue-400 bg-blue-500/5 border border-blue-500/10 px-1 rounded w-max mt-1 font-bold">IN TRANSIT</span>
              </div>
            </div>
            <div className="text-[8px] font-mono text-slate-400 flex justify-between">
              <span>Sockets: Connected</span>
              <span>Reconciled items: 2,400</span>
            </div>
          </div>
        </WindowFrame>
      );

    case "pos":
      return (
        <WindowFrame titleText="pos://register-lane-02" icon={ShoppingCart}>
          <div className="flex flex-col gap-2 flex-1 justify-between">
            {/* POS receipt billing mockup */}
            <div className="bg-white text-slate-900 font-mono p-2 rounded shadow-inner text-[10px] space-y-1">
              <p className="font-bold border-b border-dashed border-slate-300 pb-1 text-center">MAKSUDS RETAIL</p>
              <div className="flex justify-between">
                <span>1x Mocha Coffee</span>
                <span>180 BDT</span>
              </div>
              <div className="flex justify-between">
                <span>2x Croissant</span>
                <span>240 BDT</span>
              </div>
              <div className="flex justify-between font-bold border-t border-dashed border-slate-300 pt-1">
                <span>TOTAL DUE</span>
                <span>420 BDT</span>
              </div>
            </div>

            {/* Offline sync network box */}
            <div className="flex items-center justify-between text-[9px] font-mono p-1.5 rounded border border-slate-800 bg-slate-900">
              {posSyncState === "offline" && (
                <>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <AlertTriangle size={10} /> OFFLINE MODE
                  </span>
                  <span className="text-slate-400">Cached: {posCacheCount} txns</span>
                </>
              )}
              {posSyncState === "syncing" && (
                <>
                  <span className="text-blue-400 font-bold flex items-center gap-1 animate-pulse">
                    <RefreshCw size={10} className="animate-spin" /> SYNCING...
                  </span>
                  <span className="text-slate-400">Pushing cache</span>
                </>
              )}
              {posSyncState === "synced" && (
                <>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Check size={10} /> OUTLETS SYNCED
                  </span>
                  <span className="text-slate-400">Central inventory OK</span>
                </>
              )}
            </div>
          </div>
        </WindowFrame>
      );

    case "kodersolution":
      return (
        <WindowFrame titleText="ide://kodersolution-booking" icon={Code}>
          <div className="flex flex-1 gap-2 overflow-hidden">
            {/* Sidebar tree */}
            <div className="w-1/3 border-r border-slate-800/80 pr-1 flex flex-col font-mono text-[9px] text-slate-400 space-y-1">
              <span className="text-slate-400 flex items-center gap-1 font-bold mb-1"><FolderTree size={10} /> src</span>
              <span className="ml-2">app/page.tsx</span>
              <span className="ml-2 text-blue-400 font-bold">prisma.schema</span>
              <span className="ml-2">lib/booking.ts</span>
            </div>
            {/* Schema code */}
            <div className="flex-1 font-mono text-[9px] leading-relaxed text-slate-300 overflow-hidden flex flex-col justify-between">
              <div className="space-y-0.5">
                <p className="text-slate-400">// Database lock criteria</p>
                <p><span className="text-purple-400">model</span> <span className="text-emerald-400">Booking</span> {"{"}</p>
                <p className="pl-2">id  String @id</p>
                <p className="pl-2">slot DateTime</p>
                <p className="pl-2">status Status</p>
                <p className="pl-2 text-blue-400">@@index([slot, status])</p>
                <p>{"}"}</p>
              </div>
              <div className="p-1 rounded bg-slate-900 border border-slate-800/80 text-[8px] flex justify-between text-slate-400">
                <span>Lock slot: {bookingTime}</span>
                <span className="text-emerald-400">INDEXED</span>
              </div>
            </div>
          </div>
        </WindowFrame>
      );

    case "money-management":
      return (
        <WindowFrame titleText="fintech://money-ledger" icon={DollarSign}>
          <div className="flex flex-col gap-2 flex-1 justify-between">
            {/* Wallet values */}
            <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded-lg border border-slate-800/60">
              <div>
                <p className="text-[8px] text-slate-400 uppercase font-black">Net Balance</p>
                <p className="text-xs font-bold text-white">$4,850.00 BDT</p>
              </div>
              <div className="text-right">
                <p className="text-[8px] text-slate-400 uppercase font-black">Monthly Savings</p>
                <p className="text-xs font-bold text-emerald-400">+12.4%</p>
              </div>
            </div>
            {/* Spending list with tags */}
            <div className="space-y-1">
              <div className="flex justify-between p-1 rounded bg-slate-900/40 border border-slate-800/40 text-[9px]">
                <span className="text-slate-300">AWS Cloud Hosting</span>
                <span className="text-slate-400 font-mono">-$12.00 (Hosting)</span>
              </div>
              <div className="flex justify-between p-1 rounded bg-slate-900/40 border border-slate-800/40 text-[9px]">
                <span className="text-slate-300">Supermarket Receipt</span>
                <span className="text-slate-400 font-mono">-$45.20 (Groceries)</span>
              </div>
            </div>
            {/* SVG Visual line chart */}
            <div className="h-6 w-full relative opacity-80 pt-1">
              <svg viewBox="0 0 100 20" className="w-full h-full text-blue-500 overflow-visible">
                <path
                  d="M 0 18 Q 20 8 40 12 T 80 4 T 100 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="80" cy="4" r="2.5" fill="#10B981" />
              </svg>
            </div>
          </div>
        </WindowFrame>
      );

    case "sportslover":
      return (
        <WindowFrame titleText="live-score://sportslover.live" icon={Play}>
          <div className="flex flex-col gap-2 flex-1 justify-between">
            {/* Live Score board */}
            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80 flex flex-col items-center">
              <span className="text-[8px] text-rose-500 font-mono font-bold animate-pulse flex items-center gap-1 mb-1">
                ● LIVE MATCH (84')
              </span>
              <div className="flex justify-between items-center w-full text-xs font-bold text-white px-2">
                <span>BAR</span>
                <span className="text-sm font-mono bg-slate-800 px-2 py-0.5 rounded text-blue-400">2 - 1</span>
                <span>MAD</span>
              </div>
            </div>
            {/* Live match comments logs */}
            <div className="space-y-1 font-mono text-[9px] text-slate-400 leading-normal">
              <p className="text-slate-400">[82'] Sub: Pedri (Out) {"->"} Fermín (In)</p>
              <p className="text-emerald-400 font-bold">[75'] GOAL! Lewandowski (Pen) - BAR 2-1</p>
            </div>
            {/* WebSocket sync network status */}
            <div className="p-1.5 rounded bg-blue-500/5 border border-blue-500/10 text-[8px] text-blue-400 font-mono flex items-center justify-between">
              <span className="flex items-center gap-1"><RefreshCw size={10} className="animate-spin" /> Laravel Echo WebSocket online</span>
              <span className="text-slate-400">Latency: 45ms</span>
            </div>
          </div>
        </WindowFrame>
      );

    default:
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#0F172A] border border-slate-800 rounded-xl p-6 text-center select-none">
          <Layers className="text-blue-500 mb-3" size={32} />
          <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">{projectId}</p>
        </div>
      );
  }
}
