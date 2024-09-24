import { lazy } from 'react';
import Header from '../../../Components/Header';
import Typography from '../../../Components/Typography';
import { COLORS } from '../../Utils/Colors';
const EmptyRecords=lazy(()=>import('../Components/EmptyRecords'));
const LocationsList=lazy(()=>import('../LocationsList'))


export { COLORS, EmptyRecords, Header, LocationsList, Typography };

