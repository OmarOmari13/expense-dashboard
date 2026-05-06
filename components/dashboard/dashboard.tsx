"use client";


import Image from "next/image";
import { useState } from "react";
import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaCog,
  FaShoppingCart,
  FaBus,
  FaHouseUser,
  FaUtensils,
  FaPlay,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Cell,
} from "recharts";

/* ✅ BAR CHART DATA */
const chartData = [
  { value: 22 },
  { value: 35 },
  { value: 18 },
  { value: 40 },
  { value: 55 },
  { value: 30 },
  { value: 45 },
  { value: 60 },
  { value: 25 },
  { value: 38 },
  { value: 70 },
  { value: 50 },
  { value: 65 },
  { value: 30 },
  { value: 80 },
  { value: 45 },
  { value: 55 },
  { value: 35 },
  { value: 75 },
  { value: 60 },
];

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen p-10 bg-black text-white">
      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static z-50 top-0 left-0 h-full w-[180px]
          bg-black p-4 flex flex-col justify-between
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div>
          <div className="flex justify-between items-center md:hidden mb-4">
            <h2 className="text-sm font-bold">Menu</h2>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-col items-center mt-20 mb-8">
            <img
              src="https://i.pravatar.cc/100"
              className="w-16 h-16 rounded-xl"
            />
            <h2 className="mt-3 text-sm font-semibold">Samantha</h2>
            <p className="text-gray-400 text-xs text-center">
              samantha@email.com
            </p>
          </div>

          <nav className="space-y-3 text-sm mt-10">
            <MenuItem icon={<FaHome />} text="Dashboard" />
            <MenuItem active icon={<FaChartPie />} text="Expenses" />
            <MenuItem icon={<FaWallet />} text="Wallets" />
            <MenuItem icon={<FaChartPie />} text="Summary" />
            <MenuItem icon={<FaHome />} text="Accounts" />
            <MenuItem icon={<FaCog />} text="Settings" />
          </nav>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 bg-gray-100 text-black md:rounded-3xl p-4 md:p-8 ml-0 md:ml-[180px]">
        {/* MOBILE TOP */}
        <div className="md:hidden flex items-center mb-4">
          <button onClick={() => setOpen(true)}>
            <FaBars />
          </button>
          <h1 className="ml-4 font-bold text-lg">Expenses</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT */}
          <div className="flex-1">
            <h1 className="hidden md:block text-3xl font-bold">
              Expenses
            </h1>

            <p className="text-gray-500 mb-6">
              01 - 25 March, 2020
            </p>

            {/* ✅ CLEAN BAR CHART (NO BOX) */}
            <div className="h-24 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          index === chartData.length - 2
                            ? "#3b82f6"
                            : "#bfdbfe"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <Section title="Today">
              <Transaction
                icon={<FaShoppingCart />}
                color="bg-blue-500"
                title="Grocery"
                desc="Belanja di pasar"
                amount="-326.800"
              />
              <Transaction
                icon={<FaBus />}
                color="bg-purple-500"
                title="Transportation"
                desc="Naik bus umum"
                amount="-15.000"
              />
              <Transaction
                icon={<FaHouseUser />}
                color="bg-orange-500"
                title="Housing"
                desc="Bayar listrik"
                amount="-185.750"
              />
            </Section>

            <Section title="Monday, 23 March 2020">
              <Transaction
                icon={<FaUtensils />}
                color="bg-red-500"
                title="Food and Drink"
                desc="Makan Steak"
                amount="-156.000"
              />
              <Transaction
                icon={<FaPlay />}
                color="bg-green-500"
                title="Entertainment"
                desc="Nonton Bioskop"
                amount="-35.200"
              />
            </Section>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[320px] bg-gray-50 p-4 md:p-6 rounded-2xl">
            <h3 className="font-semibold mb-6">
              Where your money go?
            </h3>

            <Progress label="Food and Drinks" value={60} amount="872.400" />
            <Progress label="Shopping" value={80} amount="1.378.200" />
            <Progress label="Housing" value={70} amount="928.500" />
            <Progress label="Transportation" value={40} amount="420.700" />

            <div className="mt-10 bg-gray-200 rounded-2xl p-5 text-center">
                <div className="flex flex-row items-center justify-between mt-[-40]">
                <Image src="/Illustration.png" alt="image" width={80} height={80}/>
                <Image src="/Illustration (1).png" alt="image" width={50} height={50}/>

                </div>
              <h4 className="font-semibold mb-2">
                Save more money
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-black text-white px-5 py-2 rounded-lg">
                VIEW TIPS
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* COMPONENTS */

function MenuItem({
  icon,
  text,
  active,
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 cursor-pointer ${
        active ? "text-white font-semibold" : "text-gray-400"
      }`}
    >
      {icon}
      {text}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3 className="text-gray-600 font-semibold mb-3">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Transaction({
  icon,
  color,
  title,
  desc,
  amount,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  desc: string;
  amount: string;
}) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl">
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 flex items-center justify-center text-white rounded-full ${color}`}
        >
          {icon}
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-gray-400 text-sm">{desc}</p>
        </div>
      </div>
      <span className="font-semibold">{amount}</span>
    </div>
  );
}

function Progress({
  label,
  value,
  amount,
}: {
  label: string;
  value: number;
  amount: string;
}) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{amount}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className="h-2 bg-green-500 rounded"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}