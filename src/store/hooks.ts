import { AppDispatch, RootState } from './store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { TypedUseSelectorHook } from 'react-redux/es/exports';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
