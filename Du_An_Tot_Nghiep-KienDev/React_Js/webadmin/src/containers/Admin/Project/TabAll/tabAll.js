import { Link } from 'react-router-dom';
import './tabAll.scss';
import React, { useReducer, useEffect } from 'react';
import moment from 'moment';
import { Empty, } from 'antd';
import * as init from '../../../../Reducer/InitReducer/InitProject/indexPrj';
import * as Reducer from '../../../../Reducer/Reducers/Projects/useProject';
import * as typeAPI from '../../../../Reducer/Fetch_API/ApiTypeProject';
import * as date from '../../../../components/DateTime/DateTime';
import { API_GET_URL_IMAGE } from '../../../../api/index';
import UserLeader from '../UserWithTab/userLeaderTab';

const TabAll = () => {
    const [state, dispatch] = useReducer(Reducer.GetListProj, init.ActionTypeProject);
    useEffect(() => {
        typeAPI.getListAllProj(dispatch)
    }, []);
    return (
        <>
            <div className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {state.project.full.length > 0 ? state.project.full.map((value, index) => {
                            return (
                                <article key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <div className="flex justify-between items-center mb-5 text-gray-500">
                                        {value.khoichayduan === "false" ?
                                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                                Chưa Mở
                                            </span>
                                            :
                                            value.khoichayduan === "true" ?
                                                <span style={{ background: "rgb(185, 238, 185)" }} className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                                    Đã Mở
                                                </span>
                                                :
                                                <span style={{ background: "rgb(255, 121, 121)" }} className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                                    Đã Đóng
                                                </span>
                                        }
                                        <span className="text-sm">
                                            Ngày mở : {moment(value.ngaybatdau).format(date.MOMENT_DATE_SURE)}
                                        </span>
                                    </div>
                                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white "><p style={{ color: "rgb(61, 61, 239)" }}>{value.tenduan}</p></h2>
                                    <img className="object-cover h-48 w-180 ..." src={`${API_GET_URL_IMAGE + value.img}`}></img>
                                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400" style={{ marginTop: "10px" }}>
                                        {value.mota ? value.mota : "Chưa cập nhật"}</p>
                                    <div className="flex justify-between items-center">
                                        <UserLeader data={value.nguoiquanly} />
                                        <Link to={`/danh-sach-du-an/thong-tin-chi-tiet/${value.slug}`} className="tag_link_open">
                                            <p className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500">
                                                Xem chi tiết
                                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </p>
                                        </Link>
                                    </div>
                                </article>
                            );
                        })
                            :
                            <Empty description={
                                <span>
                                    Không có dữ liệu
                                </span>
                            } />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default TabAll;