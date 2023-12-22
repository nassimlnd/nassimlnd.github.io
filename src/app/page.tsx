import Image from 'next/image'
import Logo from "@/components/Logo";
//D1A300
export default function Home() {
    return (
        <main className="flex h-screen w-full items-center justify-between">
            <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center space-y-10">
                <Logo />
                <p className="text-3xl">Nassim LOUNADI</p>
            </div>
            <div className="w-1/2 h-full bg-neutral-900 flex flex-col justify-center px-6">
                <p className="text-neutral-600">1   {'{'}</p>
                <p className="text-neutral-600">2     <span className="text-[#D1A300]">name</span>:     "<span className="text-green-500">Nassim LOUNADI</span>",</p>
                <p className="text-neutral-600">3     <span className="text-[#D1A300]">position</span>: "<span className="text-green-500">Full-stack developer</span>",</p>
                <p className="text-neutral-600">4 </p>
                <p className="text-neutral-600">5     <span className="text-[#D1A300]">email</span>:    "<a href="mailto:nassimlnd37@gmail.com" className="text-sky-500 hover:underline underline-offset-4">nassimlnd37@gmail.com"</a>,</p>
                <p className="text-neutral-600">6     <span className="text-[#D1A300]">location</span>: "<span className="text-green-500">Tours, France</span>",</p>
                <p className="text-neutral-600">7 </p>
                <p className="text-neutral-600">8     <span className="text-[#D1A300]">experience</span>: {'{'}</p>
                <p className="text-neutral-600">9       "<span className="text-red-500">2023-2023</span>": "<span className="text-green-500">Full-stack developer</span> @ <span className="text-green-500">LIFAT</span>",</p>
                <p className="text-neutral-600">10    {'}'},</p>
                <p className="text-neutral-600">11</p>
                <p className="text-neutral-600">12    <span className="text-[#D1A300]">skills</span>: ["<span className="text-green-500">HTML</span>", "<span className="text-green-500">CSS</span>", "<span className="text-green-500">JavaScript</span>", "<span className="text-green-500">React</span>", "<span className="text-green-500">TypeScript</span>", "<span className="text-green-500">PHP</span>"],</p>
                <p className="text-neutral-600">13</p>
                <p className="text-neutral-600">14    <span className="text-[#D1A300]">links</span>: {'{'}</p>
                <p className="text-neutral-600">15      "<span className="text-red-500">website</span>": "<a href="https://nassimlounadi.me" className="text-sky-500 hover:underline underline-offset-4" target="_blank">nassimlounadi.me</a>"</p>
                <p className="text-neutral-600">16      "<span className="text-red-500">github</span>":  "<a href="https://www.github.com/nassimlnd" className="text-sky-500 hover:underline underline-offset-4" target="_blank">github.com/nassimlnd</a>",</p>
                <p className="text-neutral-600">17      "<span className="text-red-500">twitter</span>": "not available", </p>
                <p className="text-neutral-600">18      "<span className="text-red-500">linkedin</span>": "<a href="https://linkedin.com/in/nassimlounadi" className="text-sky-500 hover:underline underline-offset-4" target="_blank">linkedin.com/in/nassimlounadi</a>",</p>
                <p className="text-neutral-600">19    {'}'}</p>
                <p className="text-neutral-600">20  {'}'}</p>
            </div>
        </main>
    )
}
