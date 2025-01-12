import React from 'react';
import { FaThList } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';
import Container from '../Container';
import { CiSearch } from 'react-icons/ci';

const FilterBar = ({handleByNew,handleByOld,handleSearch}) => {
    return (
        <div>
            <Container>
                <div className='flex flex-col md:flex-row justify-between items-center mt-[130px]   gap-6'>
                 
                        <div className='relative w-[364px]'>
                            <input onChange={(e) => handleSearch(e.target.value)} type="text" name="Search" id="" placeholder='Search products' className='w-full border outline-0 rounded-[10px] py-3 px-5'/>
                            <CiSearch  className='absolute top-1/2 -translate-y-1/2 right-5'/>
                        </div>
                   
                    <div className="filter flex flex-wrap gap-6">
                        <div className='flex gap-1 items-center'>
                            <p className='text-[#3F509E] text-[16px] font-normal capitalize'>per page</p>
                            <select  
                            //  onChange={selectNumber}      
                              name="" id="" className='text-[#737373] text-[16px] font-normal border border-[#e8e8e8]  px-5 outline-none'>
                                <option value="3">3</option>
                                <option value="6">6</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="15">15</option>
                                <option value="18">18</option>
                                <option value="21">21</option>

                            </select>

                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className="icon flex gap-1">
                                <div onClick={() => setActiveMulti(true)} className={`  text-[#737373] border-[#F0F0F0] w-6   h-6 border  flex justify-center items-center  `}>
                                    <IoGrid className='text-[16px]' />
                                </div>
                                <div onClick={() => setActiveMulti(false)}  className={`   w-6   h-6  border border-[#F0F0F0] flex justify-center items-center text-[#737373] `}>
                                    <FaThList className='text-[16px]' />
                                </div>

                            </div>
                        </div>
                        <div className='flex gap-1 items-center border border-[#e8e8e8] py-3  px-5 rounded-md'>
                            <p className='text-[#3F509E] text-[16px] font-normal capitalize'>sort by:</p>
                            <select
                                onChange={(e) => {
                                    // Log the selected value to check if the event is firing
                                    if (e.target.value === "new") {
                                        handleByNew();
                                    } else if (e.target.value === "old") {
                                        handleByOld();
                                    }
                                }}
                                name="sort"
                                id="sort"
                                className="text-[#737373] text-[16px] font-normal px-5 outline-0"
                            >
                                <option value="new" className="text-black bg-white">New</option>
                                <option value="old" className="text-black bg-white">Old</option>
                            </select>
                        </div>
                       
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FilterBar;