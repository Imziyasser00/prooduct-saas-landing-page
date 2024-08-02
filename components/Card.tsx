const Card = ({
    children, variants
  }: Readonly<{
    children: React.ReactNode,
    variants?: string,
  }>) => {
  return (
    <div className={`${variants} bg-[#0E1330] border border-[#282D45] rounded relative overflow-clip p-10`}>
      {children} 
      <div className="w-[600px] rounded-full h-[600px] bg-[#7214ff1c] translate-x-[-50%] absolute top-1/2 translate-y-[-50%] -left-30 blur-[70px]" />
      <div className="w-[600px] rounded-full h-[600px] bg-[#32cafd26] absolute top-[70%] translate-y-[-50%] right-[-20%] blur-[70px] opacity-45" />
    </div>
  )
}

export default Card
