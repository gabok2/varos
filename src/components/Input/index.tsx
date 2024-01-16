"use client";

import { useState } from "react";

export function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");

  const handleSubscribe = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      name,
      email,
      cellphone,
    };

    await fetch("/api/newsletter/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setName("");
    setEmail("");
    setCellphone("");
  };

  return (
    <section className="flex flex-col   md:justify-between md:flex-row  px-4 md:px-6 xl:px-36 md:mt-[176px] lg:mt-[192px] md:gap-[97px] lg:gap-[122px] max-md:mt-[128px]">
      <div className="flex flex-col">
        <h1 className="text-[30px] text-[#F2F4F8] leading-9 font-bold  max-md:text-center px-4">
          Cadastre-se para receber mais informações.
        </h1>

        <p className="text-lg text-[#F2F4F8] max-md:text-center font-bold leading-5 px-4 pt-2">
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </p>
      </div>
      <div className="max-md:mt-[40px] md:w-full lg:w-[564px] flex flex-col px-[53px] py-[60px] bg-[#131516] border boder-[#4D5358] rounded-[32px]  ">
        <form onSubmit={handleSubscribe}>
          <div className=" border border-[#4D5358] rounded bg-[#222729]">
            <input
              className=" w-full text-[#878D96] text-lg leading-5 bg-[#222729] px-5 py-3"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className=" mt-6 border border-[#4D5358] rounded bg-[#222729]">
            <input
              className=" text-[#878D96] text-lg leading-5 bg-[#222729] w-full px-5 py-3 "
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className=" mt-6 border border-[#4D5358] rounded bg-[#222729]">
            <input
              className=" text-[#878D96] text-lg leading-5 bg-[#222729] w-full px-5 py-3 "
              type="number"
              placeholder="Celular"
              value={cellphone}
              onChange={(e) => setCellphone(e.target.value)}
            />
          </div>

          <button className="bg-[#19C819] w-full mt-6 py-[10px] px-4 rounded border border-[#FAFAFA] text-lg leading-5 font-semibold text-[#131313]">
            QUERO ME INSCREVER
          </button>
        </form>
      </div>
    </section>
  );
}
