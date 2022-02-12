import React from 'react';
import {FC, useEffect, useState} from 'react';

interface Post {
    ip: string;
    version: string;
    city: string;
    country_name: string;
    region: string;
    region_code: number;
    country_capital: string;
    country: string;
    timezone: string;
    postal: number;
    country_area: number;
    country_population: number;
    org: string;
}

const IPInfoCard: FC = () => {
    const [ipInfo, setIpInfo] = useState<Post>({});
    const [loading, setLoading] = useState(false);
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
        const url = 'https://ipapi.co/json/';
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setIpInfo(data);
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchData();
        setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="box">
                    <div className="container">
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
                                    <span>Country Capital</span>{' '}
                                    {country_capital}
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
            )}
        </>
    );
};

export default IPInfoCard;
