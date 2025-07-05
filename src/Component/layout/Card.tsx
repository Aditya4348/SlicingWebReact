const Card = ({children, className} : {children: React.ReactNode, className?: string}) => {
    
    return(
        <div className={`w-full h-full bg-white shadow-lg p-8 ${className}`}>
            {children}
        </div>
    )
}

export default Card