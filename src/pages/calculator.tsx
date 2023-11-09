import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

const IndexPage: NextPage = (): ReactElement => {
  const [count, setCount] = useState<string>('');
  const [count1,setCount1] =  useState<number>(0);
  const [operator,setOperator] =  useState<string>(`+`);
  //↑四則演算の部分(表示はされない)
  
  const [labourHours, setLabourHours] = useState<string>('0');
 //↑使わない 

  return (
    <>
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
          <div className="p-4 mb-3 border-2 rounded h-full w-full text-right">
            <span className="text-gray-700 select-none">{count}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
          
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);
                setCount(count + '7');

              }}>
              <span className="select-none text-xl">7</span>
            </Button>
            
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);
                setCount(count + '8');
              }}>
              <span className="select-none text-xl">8</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(count + '9');
              }}>
              <span className="select-none text-xl">9</span>
               
               
            </Button>
            <Button
              className="py- bg-pink-300 text-white rounded border border-gray-00 cursor-pointer"
              onClick={() => {
                setCount1(Number(count));
                //これで表示されている文字が数字に変換されて保存する
                setOperator(`/`)
              }}>
              <span className="select-none text-xl">/</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(count + '4');
              }}>
              <span className="select-none text-xl">4</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + '5');
              }}>
              <span className="select-none text-xl">5</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + '6');
              }}>
              <span className="select-none text-xl">6</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount1(Number(count));
                //これで表示されている文字が数字に変換されて保存する
                setOperator(`*`)
              }}>
              <span className="select-none text-xl">×</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + '1');
              }}>
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + '2');
              }}>
              <span className="select-none text-xl">2</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + '3');
              }}>
              <span className="select-none text-xl">3</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount1(Number(count));
                //これで表示されている文字が数字に変換されて保存する
                setOperator(`-`)

              }}>
              <span className="select-none text-xl">-</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(count + '.')
              }}>
              <span className="select-none text-xl">.</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount (Number(`0`));
              }}>
              <span className="select-none text-xl">0</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                if(operator === `-`){
                  setCount (`${Number(count)-count1}`);
                }
                if(operator === `+`){
                  setCount (`${Number(count)+count1}`);
                }
                if(operator === `/`){
                  setCount (`${Number(count)/count1}`);
                }
                if(operator === `*`){
                  setCount (`${Number(count)*count1}`);
                }

              }}>
              <span className="select-none text-xl">=</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount1(Number(count));
                //これで表示されている文字が数字に変換されて保存する
                setOperator(`+`)
              }}>
              <span className="select-none text-xl">+</span>
            </Button>
            <Button
              className="py-2 bg-red-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount('');
              }}>
              <span className="select-none text-xl">C</span>
            </Button>

          </div>
        </div>
      </div>
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
        <div className="grid grid-cols-3 gap-1">
            <span className="text-gray-800 text-lg">勤務開始時間</span>
            <span className="text-gray-800 text-lg">勤務終了時間</span>
            <span className="text-gray-800 text-lg">荒木時間</span>
            <input
              className="py-2 px-3 border-2 rounded border-gray-200 cursor-text"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);
                
                setLabourHours(e.target.value);
              }}
            />
            <input
              className="py-2 px-3 border-2 rounded border-gray-200 cursor-text"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);

                setLabourHours(e.target.value);
              }}
            
              
            />
            
            <span className="select-none text-xl font-mono text-gray-700 text-right">{labourHours}</span>
            
          </div>
        </div>
      </div>
    </>
  );
};

// export const getStaticProps: GetStaticProps = () => {
// };

// eslint-disable-next-line import/no-default-export
export default IndexPage;
