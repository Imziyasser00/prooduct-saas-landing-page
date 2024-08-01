const TextGradient = ({ text }: { text: string }) => {
  return (
    <h1 className="pt-3 pb-6 bg-clip-text text-transparent text-4xl lg:text-5xl font-bold bg-gradient-to-b from-[#F6F6F7] to-[#7E808F]">
      {text}
    </h1>
  );
};

export default TextGradient;
