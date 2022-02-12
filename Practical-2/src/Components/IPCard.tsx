import React, {Suspense} from 'react';
import {FC, useEffect, useState} from 'react';
import {fetchData} from '../services/index';
import {IPInfo} from '../interface';
import Search from './Search';

const IPInfoCard: FC = () => {
    const [ipInfo, setIpInfo] = useState<IPInfo>({});
    const {
        ip,
        version,
        city,
        country_name,
        region,
        region_code,
        country_capital,
        country,
        timezone,
        postal,
        country_area,
        country_population,
        org,
    } = ipInfo;

    useEffect(() => {
        const fetchApi = async () => {
            setIpInfo(await fetchData());
        };
        fetchApi();
    }, []);

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <div className="container ">
                <div className="card">
                    <Search />
                    <h2>{ip}</h2>
                    <div className="items">
                        <div>
                            <h4>
                                <span>Version</span> {version}
                            </h4>
                            <h4>
                                <span>Region</span> {region}
                            </h4>
                            <h4>
                                <span>Region Code</span> {region_code}
                            </h4>
                            <h4>
                                <span>Country</span> {country}
                            </h4>
                        </div>
                        <div>
                            <h4>
                                <span>Country name</span> {country_name}
                            </h4>
                            <h4>
                                <span>Country Capital</span> {country_capital}
                            </h4>
                            <h4>
                                <span>Postal</span> {postal}
                            </h4>
                            <h4>
                                <span>City</span> {city}
                            </h4>
                        </div>
                        <div>
                            <h4>
                                <span>Country area</span> {country_area}
                            </h4>
                            <h4>
                                <span>Country population</span>
                                {country_population}
                            </h4>
                            <h4>
                                <span>Org</span> {org}
                            </h4>
                            <h4>
                                <span>Timezone</span> {timezone}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default IPInfoCard;
