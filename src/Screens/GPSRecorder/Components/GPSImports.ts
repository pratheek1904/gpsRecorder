import { lazy } from 'react';
import { Images } from '../../../Assets/Images';
import Header from '../../../Components/Header';
import Typography from '../../../Components/Typography';
import { COLORS } from '../../Utils/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH, useConsole } from '../../Utils/helpers';

const EmptyRecords = lazy(() => import('../Components/EmptyRecords'));
const LocationsList = lazy(() => import('../LocationsList'))


export { COLORS, EmptyRecords, Header, Images, LocationsList, SCREEN_HEIGHT, SCREEN_WIDTH, Typography, useConsole };

