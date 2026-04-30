const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/447491967777"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-[60px] md:h-[60px] rounded-full shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] hover:scale-110 hover:shadow-[0_14px_36px_-6px_rgba(37,211,102,0.7)] transition-all duration-300"
      style={{ backgroundColor: "#25D366" }}
    >
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-40"
        style={{ backgroundColor: "#25D366" }}
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 32 32"
        className="relative w-7 h-7 md:w-8 md:h-8 fill-white"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.302.158-.63.158-.946 0-.17-.044-.328-.087-.484-.13-.273-1.32-.857-1.534-.956zM16.119 0C7.65 0 .77 6.88.77 15.347c0 2.7.7 5.348 2.05 7.69l-2.583 9.554 9.78-2.563a15.292 15.292 0 0 0 6.103 1.272c8.467 0 15.347-6.88 15.347-15.347C31.466 6.88 24.586 0 16.12 0zm0 28.36c-2.143 0-4.272-.557-6.13-1.62l-.43-.258-5.646 1.48 1.505-5.502-.27-.43A12.985 12.985 0 0 1 3.124 15.347c0-7.165 5.83-12.99 12.995-12.99 7.166 0 12.99 5.825 12.99 12.99 0 7.165-5.825 13.013-12.99 13.013z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloat;
