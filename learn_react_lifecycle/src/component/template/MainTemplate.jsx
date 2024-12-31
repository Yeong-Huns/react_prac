import {SelectComp} from "../organism/SelectComp.jsx";
import {CounterComp} from "../organism/CounterComp.jsx";
import {BookList} from "../organism/BookList.jsx";
import {ShowTimer} from "../organism/ShowTimer.jsx";

export const MainTemplate = () => {
    return (
        <main className={'container max-w-lg mx-auto p-4'}>
            <SelectComp />
            <CounterComp/>
            <BookList/>
            <ShowTimer/>
        </main>
    )
}