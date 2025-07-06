export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#111]">
      <div className="bg-[#1e1e2e] p-6 rounded-lg shadow-lg w-[90%] max-w-md text-white">
        <video
          className="w-full rounded-md mb-4"
          controls
          poster="/thumb.jpg" // opcional
        >
          <source src="/animacao.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>

        <h1 className="text-xl font-bold">Animator vs. Animation</h1>
        <p className="text-gray-400">Gustavo Linhares</p>
      </div>
    </main>
  );
}
