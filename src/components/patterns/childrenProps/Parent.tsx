type ParentProps = {
  children: React.ReactNode
}

function Parent({ children }: ParentProps) {
  return (
    <>
      <div>Parent</div>
      {children}
    </>
  )
}

export default Parent