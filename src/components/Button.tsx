
const Button = ({text,onClickfunc,className}:{text:string,onClickfunc?:()=>void,className?:any}) => {
    return (
        <a href="https://forms.gle/rD8xDgdUmwZDeFen6" className={"border-2 border-[#8940B2] text-[#8940B2] font-bold text-lg  rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-center  bg-[#0E0014]  uppercase "+className} onClick={onClickfunc}>
            {text}
        </a>
    )
}

export default Button   