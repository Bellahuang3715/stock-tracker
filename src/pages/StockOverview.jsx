import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"

export const StockOverview = () => {
    return (
        <div>
            StockOverview Page
            <AutoComplete />
            <StockList />
        </div>
    )
}