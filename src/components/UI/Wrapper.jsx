

const Wrapper = (props) => {
  return (
    <div className={` max-w-[1200px] w-full mx-auto p-4 ${props.className}`}>{props.children}</div>
  )
}

export default Wrapper