import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';
//↑from~ にあるボタンを使うよ　

const IndexPage: NextPage = (): ReactElement => {
  const [count, setCount] = useState<string>('');
  const [count1,setCount1] =  useState<number>(0);
  const [operator,setOperator] =  useState<string>(`+`);
  //↑四則演算の部分(表示はされない)

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
                setCount (`${Number(`${count}7`)}`);

              }}>
              <span className="select-none text-xl">7</span>
            </Button>
            
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);
                setCount (`${Number(`${count}8`)}`);
              }}>
              <span className="select-none text-xl">8</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount (`${Number(`${count}9`)}`);
              }}>
              <span className="select-none text-xl">9</span>
               
               
            </Button>
            <Button
              className="py- bg-pink-300 text-white rounded border border-gray-00 cursor-pointer"
              onClick={() => {
                if(operator === `-`){
                     setCount1 (count1-Number(count));
                }
                if(operator === `+`){
                  setCount1 (count1+Number(count));
                }
                if(operator === `/`){
                  setCount1 (count1/Number(count));
                }
                if(operator === `*`){
                  setCount1 (count1*Number(count));
                }
                //これで表示されている文字が数字に変換されて保存する
                setOperator(`/`)
                setCount(`0`) 
                //↑setcountの値を無記入にする
              }}>
              <span className="select-none text-xl">/</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount (`${Number(`${count}4`)}`);
              }}>
              <span className="select-none text-xl">4</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount (`${Number(`${count}5`)}`);
              }}>
              <span className="select-none text-xl">5</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount (`${Number(`${count}6`)}`);
              }}>
              <span className="select-none text-xl">6</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);
                let pota = 0

                if(operator === `-`){
                  pota = count1-Number(count);
                  setCount1 (pota)
                }
                if(operator === `+`){
                  pota =count1+Number(count);
                  setCount1 (pota)
                }
                if(operator === `/`){
                  pota = count1/Number(count);
                  setCount1 (pota)
                }
                if(operator === `*`){
                  pota = count1*Number(count);
                  setCount1 (pota)
                }
                setOperator(`*`)
                setCount(`0`) 
               
                

              }}>
              <span className="select-none text-xl">×</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount (`${Number(`${count}1`)}`);
              }}>
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);
                
               
                setCount (`${Number(`${count}2`)}`);
              }}>
              <span className="select-none text-xl">2</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount (`${Number(`${count}3`)}`);

              }}>
              <span className="select-none text-xl">3</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);
                if(operator === `-`){
                  setCount1 (count1-Number(count));
                }
                if(operator === `+`){
                  setCount1 (count1+Number(count));
                }
                if(operator === `/`){
                  setCount1 (count1/Number(count));
                }
                if(operator === `*`){
                  setCount1 (count1*Number(count));
                }

                //これで表示されている文字が数字に変換されて保存する
                setOperator(`-`)
                setCount(`0`) 
                //↑setcountの値を無記入にする

              }}>
              <span className="select-none text-xl">-</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
               
                if(count === ``){
                  setCount(`0.`)
                  return
                }
                if(count.includes(`.`)){
                  return
                }
                setCount(count + '.')
              }}>
              <span className="select-none text-xl">.</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);
                if(count === `0`){
                  setCount(`0`)
                  return
                }
                setCount (`${Number(`${count}0`)}`);
              
                setCount(count+`0`);
              }}>
              <span className="select-none text-xl">0</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                if(operator === `-`){
                  setCount(`${count1 - Number(count)}`);
                  //setCount (count1-`${Number(count)}`);間違い
                  //setCountはstringが欲しいので${　}の中でnumber同士で四則演算をする
                }
                if(operator === `+`){
                  setCount (`${Number(count)+count1}`);
                }
                if(operator === `/`){
                  setCount (`${count1/Number(count)}`);
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

                if(operator === `-`){
                     setCount1 (count1-Number(count));
                }
                if(operator === `+`){
                  setCount1 (count1+Number(count));
                }
                if(operator === `/`){
                  setCount1 (count1/Number(count));
                }
                if(operator === `*`){
                  setCount1 (count1*Number(count));
                }
                //これで表示されている文字が数字に変換されて保存する
                setOperator(`+`)
                setCount(``) 
                //↑setcountの値を無記入にする
              }}>
              <span className="select-none text-xl">+</span>
            </Button>
            <Button
              className="py-2 bg-red-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);
                setOperator(`+`)
                setCount('0');
                setCount1(0);
              }}>
              <span className="select-none text-xl">C</span>
            </Button>

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
