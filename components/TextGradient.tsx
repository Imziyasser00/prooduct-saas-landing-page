const TextGradient = ({ text,variant }: { text: string, variant?: string }) => {
  return (
    <h1 className={` ${variant ? variant : 'pt-3 pb-6 text-4xl lg:text-5xl'} bg-clip-text text-transparent font-bold bg-gradient-to-b from-[#F6F6F7] to-[#7E808F]`}>
      {text}
    </h1>
  );
};

export default TextGradient;
