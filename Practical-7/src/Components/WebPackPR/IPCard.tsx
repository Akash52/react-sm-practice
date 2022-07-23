import React from 'react';
import {FC, useEffect, useState} from 'react';
import {fetchData} from '../../services/index';
import {IPInfo} from '../../interface';
import Search from './Search';
import Spinner from './Spinner';

const IPInfoCard: FC = () => {
    const [ipInfo, setIpInfo] = useState<IPInfo>({} as IPInfo);
    const [isLoading, setIsLoading] = useState<boolean>(false);
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
        country_calling_code,
    } = ipInfo;

    useEffect(() => {
        setIsLoading(true);
        const fetchApi = async () => {
            setIpInfo(await fetchData());
        };
        fetchApi();
        setIsLoading(false);
    }, []);

    const searchIP = async (ip: string) => {
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await response.json();
        setIpInfo(data);
    };

    if (!ipInfo || ipInfo.length === 0) {
        return <p>No Ip data Found</p>;
    }

    return isLoading ? (
        <Spinner />
    ) : (
        <>
            <div className="ip">
                <div className="card  bg-slate-300">
                    <Search searchIP={searchIP} name={''} />
                    <h2 className="p-4 text-lg text-gray-900">{ip}</h2>
                    <div className="items iph bg-slate-200 p-5">
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
                                <span>Calling code</span> {country_calling_code}
                            </h4>
                            <h4>
                                <span>Timezone</span> {timezone}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IPInfoCard;
