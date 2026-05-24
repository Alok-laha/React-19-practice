import Users from "../users/User";
import Product from "../products/Product";
import React, {useState} from "react";

const Wrap = ({ page }: { page: string }) => {
    const [currentPage, setCurrentPage] = useState(page);
    let CurrentPage: React.ReactElement | null = null;
    const componentSwitcher = (componentToRender: string) => {
        setCurrentPage(componentToRender);
    }
    switch (currentPage) {
        case 'user':
            CurrentPage = <Users onClick={componentSwitcher}/>
            break;
        
        case 'product':
            CurrentPage = <Product onClick={componentSwitcher}/>
            break;
    
        default:
            CurrentPage = <h1>Sorry!! Wrong page</h1>
            break;
    }

    return (
        CurrentPage
    )
}

export default Wrap;