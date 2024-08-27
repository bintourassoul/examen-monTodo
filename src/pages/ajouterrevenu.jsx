import React from 'react';
import { Link } from 'react-router-dom';

export const Ajouterrevenu =() =>{
    return (
      <div className="bg-[#FFFFFF] flex flex-col items-center p-[0_0_151px_0] w-[1512px] box-sizing-border">
        <div className=" bg-[50%_50%] bg-cover bg-no-repeat relative m-[0_1px_115px_0] flex p-[131px_0.5px_33px_0] w-[311px] box-sizing-border">
          <span className="font-normal text-[14px] leading-[2] text-[#0C5E69]">
            Gestion du budget
          </span>
        </div>
        <Link to='/Ajouterrevenu'>
        <div className="m-[0_0_80px_0.4px] inline-block  font-normal text-[24px] leading-[1.167] text-[#0C5E69]">
          AJOUTER REVENU
        </div>
        </Link>
        <div className="m-[0_436.7px_18px_0] inline-block  font-normal text-[24px] text-[#0C5E69]">
          TITRE
        </div> 
        <div className="rounded-[6px] border-[1px_solid_#E6E6E6] bg-[#FFFFFF] relative m-[0_0_60px_0] p-[16px_25px_16px_25px] w-[fit-content] box-sizing-border">
          <span className="font-light text-[14px] leading-[2] text-[#000000]">
            Salaire
          </span>
        </div>
        <div className="m-[0_386.5px_18px_0] inline-block font-normal text-[24px] text-[#0C5E69]">
          MONTANT
        </div>
        <div className="rounded-[6px] border-[1px_solid_#E6E6E6] bg-[#FFFFFF] relative m-[0_0_80px_0] p-[16px_25px_16px_25px] w-[fit-content] box-sizing-border">
          <span className="font-light text-[14px] leading-[2] text-[#000000]">
            100.000 F CFA
          </span>
        </div>
        <div className="rounded-[6px] bg-[#0C5E69] relative flex p-[15px_0_15px_0.9px] w-[500px] box-sizing-border">
          <span className=" font-normal mx-auto text-[24px] text-[#FFFFFF]">
            VALIDER
          </span>
        </div>
      </div>
    )
  }
  export default Ajouterrevenu;