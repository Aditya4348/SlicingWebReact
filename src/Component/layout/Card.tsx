const Card = ({children, className} : {children: React.ReactNode, className?: string}) => {
    
    return(
        <div className={`w-full h-full bg-white shadow-lg ${className}`}>
            {children}
        </div>
    )
}

export default Card