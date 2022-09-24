import "./VisibilityFilter.css"
import {useDispatch, useSelector} from 'react-redux';
import {VISIBILITY_FILTER} from '../contants';
import {setFilter} from '../Redux/actions';
import {getCountNumber} from "../Redux/selector";
import { Tab, TabList, Tabs } from '@chakra-ui/react';

export const VisibilityFilter = () => {
    const dispatch = useDispatch();
    const countNumber = useSelector(getCountNumber);
    return (
        <div className="filter">
            <label className="items">
                items left:{countNumber}
            </label>
            <Tabs size='sm' variant='enclosed-colored' colorScheme="red">
            <TabList >
                {Object.keys(VISIBILITY_FILTER).map(filterkey => {
                    const currentFilter = VISIBILITY_FILTER[filterkey];
                    return (
                        <div className="buttons">
                            <Tab key={`visibility-filter-${currentFilter}`}
                               onClick={() => dispatch(setFilter(currentFilter))}
                            >{currentFilter}</Tab>
                        </div>
                    )
                })}
            </TabList>
            </Tabs>
        </div>

    )
}