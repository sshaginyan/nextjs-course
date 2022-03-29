import { useRouter } from 'next/router';
import Button from '../ui/button';

import classes from './event-search.module.css';

function EventsSearch(props) {
    const router = useRouter();
    return (
        <form className={classes.form}>
            <div>
                <div>
                    <label htmlFor="year">Year</label>
                    <select id="year">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="month">Month</label>
                <select id="month">
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Api</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>
            </div>
            <Button onClick={() => router.push(props.link)}>Find Events</Button>
        </form>
    );
}

export default EventsSearch;