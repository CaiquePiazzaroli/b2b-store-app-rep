import TopNav from "@/components/ui/topNav";

export default function laout({ children } : {children : React.ReactNode }) {
    return(
        <div>
            <TopNav client={false}/>
            <main>
                {children}
            </main>
        </div>
        
    )
}