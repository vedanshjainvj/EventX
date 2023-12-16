import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainDashboardNav from "./MainDashboardNav";
// import html2convans from 'html2canvas';
// import jsPDT, { jsPDF } from 'jspdf';

const ComplaintDashboard = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const pdfRef = useRef();
    const [initial,final] = useState([{
        Did:"",
        Name:"",
        CompEmail:"",
        Year:"",
        Branch:"",
        MobileNumber:"",
        ComAbout:"",
        College:"",
        ComDiscribe:"",
        Suggestion:"",
        PostDate:""
    }])

    const getdata = async()=>{
        try{
        const response = await axios.get(`http://localhost:4000/Complaint/${id}`);
        const resdata = response.data.data;
        resdata.map((info)=>{
            final((sdata) => [
             ...sdata,{
         Did:info._id,       
        Name:info.Name,
        CompEmail: info.CompEmail,
        Year: info.Year,
        Branch: info.Branch,
        MobileNumber: info.MobileNumber,
        ComAbout: info.ComAbout,
        College: info.College,
        ComDiscribe: info.ComDiscribe,
        Suggestion:info.Suggestion,
        PostDate:info.PostDate
        }
        ]);
        })
        }catch(error){
            if(error.response.request.status === 401){
                navigate('/errorpage');
            }
            else{
           alert(error);
            }
        }
    }
     
    // const  downloadPDF =()=>{
    //     const input  = pdfRef.current;
    //     html2convans(input).then((canvas)=>{
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF('P','mm','a4',true);
    //         const pdfWidth = pdf.initial.pageSize.getWidth();
    //         const pdfHeight = pdf.initial.pageSize.getHeight();
    //         const imgWidth = canvas.width;
    //         const imgHeight = canvas.height;
    //         const ratio = Math.min(pdfWidth/ imgWidth,pdfHeight/imgHeight);
    //         const imgX =(pdfWidth - imgWidth*ratio)/2;
    //         const imgY =30;
    //        pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
    //        pdf.save('invoice.pdf')
    //     })
    // }
    useEffect(()=>{
       getdata(); 
    },[])

    return (
        <>
            <div className="flex w-full justify-between">
                
                <MainDashboardNav></MainDashboardNav>
                <div className="w-5/6  justify-center items-center">
                    <div class="flex flex-col items-center  py-10">
                        <h1 class="text-lg text-gray-100 font-medium">
                            Complaint Dashboard
                        </h1>
                        <div className="flex  flex-wrap-reverse justify-around  ">
                         {/* {console.log(initial.map())} */}
                         {initial.map((info)=>{
                            {if(!info.Did) return null}
                        return(
                        <div ref={pdfRef}
                            class="h-fit mx-2 max-w-[20rem] sm:max-w-xl mt-5 md:mt-10 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div className="flex flex-col sm:flex-row justify-between ">                           
                            <div
                                class="text-black border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                              Name :-  {info.Name}    
                            </div>
                            <div
                                class="text-black border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                              College :- {info.College} 
                            </div>
                            </div>
                            <div className="flex justify-between flex-col sm:flex-row ">                           
                            <div
                                class="text-black  border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                             Email :- {info.CompEmail}    
                            </div>
                            <div
                                class="text-black border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                              Number :- {info.MobileNumber}
                            </div>
                            </div>
                            <div className="flex justify-between flex-col sm:flex-row ">                           
                            <div
                                class="text-black border-b-2  border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                              Branch :- {info.Branch}    
                            </div>
                            <div
                                class="text-black border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                              Semister :- {info.Year} 
                            </div>
                            </div>
                    
                            <div class="p-6">
                                <h5
                                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Regarding :- {info.ComAbout}
                                </h5>
                                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    {info.ComDiscribe}
                                </p>
                            </div>
                            <div
                                class="text-black border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                              Suggestion :- {info.Suggestion} 
                            </div>
                            <div
                                class=" text-black border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                {info.PostDate}
                            </div>
                            <button className="bg-red-800 w-full py-2 font-bold text-lg rounded-sm "
                            onClick={async()=>{
                                const conformation = confirm("You have conform");
                                if(conformation===true){
                                await axios.delete(`http://127.0.0.1:4000/Complaint/${info.Did}`);
                                final((initial)=>
                                initial.filter(e=>e.Did!=info.Did)
                                )}
                            }}> Delete</button>
                            {/* <button className="bg-green-600 w-full py-2 font-bold text-lg rounded-sm " */}
                          {/* onClick={downloadPDF}> Downlode</button> */}
                        </div>

                        )
                       })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComplaintDashboard;