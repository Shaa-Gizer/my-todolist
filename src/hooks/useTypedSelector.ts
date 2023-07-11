import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/myStore";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector