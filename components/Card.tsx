const Card = ({
    children, variants,padding
  }: Readonly<{
    children: React.ReactNode,
    variants?: string,
    padding?: string | 'p-10'
  }>) => {
  return (
    <div className={`${variants} bg-[#0E1330] border border-[#282D45] rounded relative overflow-clip ${padding}`}>
      <div className="w-[600px] rounded-full h-[600px] bg-[#32cafd26] absolute top-[70%] translate-y-[-50%] right-[-20%] blur-[70px] opacity-45" />
      <div className="w-[600px] rounded-full h-[600px] bg-[#7214ff1c] translate-x-[-50%] absolute top-1/2 translate-y-[-50%] -left-30 blur-[70px]" />
      {children} 
    </div>
  )
}

export default Card
