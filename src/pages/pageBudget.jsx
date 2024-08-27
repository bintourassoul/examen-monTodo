import React from 'react';
import { Link } from 'react-router-dom';

export const PageBudget = () =>{
    return (
      <div className="bg-[#FFFFFF] flex p-[0_116px_0_116px] w-[1200px] box-sizing-border">
        <div className="relative flex flex-col box-sizing-border">
        <h1 className='text-3xl text-[#D1C000] mt-16 text-center'><span className='text-[#0C5E69] font-extrabold '>B</span>UDGET</h1>
        <p className=" font-normal text-[14px] text-center text-[#0C5E69]">
              Gestion du budget
            </p>
          <div className="m-[0_0_120px_0] mt-7 flex flex-row gap-[0_115px] w-[1280px] box-sizing-border">
            <div className="shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)] bg-[#FFFFFF] relative flex flex-col items-center p-[0_0_33px_0] w-[350px] box-sizing-border">
              <div className="bg-[#0C5E69] relative m-[0_0_27px_0] flex p-[13px_0_13px_0.8px] w-[350px] box-sizing-border">
                <span className=" font-normal text-[24px] text-[#FFFFFF]">
                  Budget
                </span>
              </div>
              <span className="m-[0_0.9px_0_0] font-normal text-[24px] text-[#2F2F2F]">
                120.000F CFA
              </span>
            </div>
            <div className="shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)] bg-[#FFFFFF] relative flex flex-col items-center p-[0_0_33px_0] w-[350px] box-sizing-border">
              <div className="bg-[#0C5E69] relative m-[0_0_27px_0] flex p-[13px_0.9px_13px_0] w-[350px] box-sizing-border">
                <span className="font-normal text-[24px] text-[#FFFFFF]">
                  Dépenses
                </span>
              </div>
              <span className="m-[0_0.9px_0_0] font-normal text-[24px] text-[#2F2F2F]">
                100.000F CFA
              </span>
            </div>
            <div className="shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)] bg-[#FFFFFF] relative flex flex-col items-center p-[0_0_33px_0] w-[350px] box-sizing-border">
              <div className="bg-[#0C5E69] relative m-[0_0_27px_0] flex p-[13px_0.7px_13px_0] w-[350px] box-sizing-border">
                <span className="font-normal text-[24px] text-[#FFFFFF]">
                  Solde
                </span>
              </div>
              <span className="m-[0_0.2px_0_0]  font-normal text-[24px] text-[#2F2F2F]">
                20.000F CFA
              </span>
            </div>
          </div>
          <div className="m-[0_0_20px_0] inline-block self-start  font-normal text-[32px] text-[#D1C000]">
            Liste des depenses
          </div>
          <div className="rounded-[6px] border-[1px_solid_#E6E6E6] relative m-[0_0_120px_0] flex p-[0px_0_25px_0] w-[1280px] box-sizing-border">
            <div className="relative flex flex-col w-[1280px] h-[fit-content] box-sizing-border">
              <div className="rounded-t-[6px] border-[1px_solid_#E6E6E6] bg-[#0C5E69] relative m-[0_0_16px_0] flex flex-row justify-between p-[21px_0_19px_34px] w-[1280px] box-sizing-border">
                <span className="m-[0_15px_0_0] w-[64px]  font-normal text-[24px] text-[#FFFFFF]">
                  TITRE
                </span>
                <span className="font-normal text-[24px] text-[#FFFFFF]">
                  MONTANT
                </span>
                <span className="font-normal text-[24px] text-[#FFFFFF]">
                  ACTIONS
                </span>
              </div>
              <div className="m-[0_34px_15px_34px] flex flex-row justify-between self-start w-[962px] box-sizing-border">
                <div className="m-[11px_9px_11px_0] inline-block w-[65px] font-light text-[14px] text-[#000000]">
                  Nourriture
                </div>
                <div className="m-[11px_0_11px_0] inline-block  font-normal text-[14px] text-[#000000]">
                  40.000 F CFA
                </div>
                <div className="rounded-[6px] bg-[#FF5B5B] relative flex p-[11px_16px_11px_16px] box-sizing-border">
                  <span className="font-bold text-[14px] text-[#FFFFFF]">
                    supprimer
                  </span>
                </div>
              </div>
              <div className="bg-[#E6E6E6] m-[0_0_14px_0] w-[1280px] h-[0px]">
              </div>
              <div className="m-[0_34px_15px_34px] flex flex-row justify-between self-start w-[962px] box-sizing-border">
                <div className="m-[11px_9px_11px_0] inline-block w-[34px]  font-light text-[14px] text-[#000000]">
                  Loyer
                </div>
                <div className="m-[11px_0_11px_0] inline-block  font-light text-[14px] text-[#000000]">
                  30.000 F CFA
                </div>
                <div className="rounded-[6px] bg-[#FF5B5B] relative flex p-[11px_16px_11px_16px] box-sizing-border">
                  <span className=" font-bold text-[14px] text-[#FFFFFF]">
                    supprimer
                  </span>
                </div>
              </div>
              <div className="bg-[#E6E6E6] m-[0_0_14px_0] w-[1280px] h-[0px]">
              </div>
              <div className="m-[0_34px_15px_34px] flex flex-row justify-between self-start w-[962px] box-sizing-border">
                <div className="m-[11px_9px_11px_0] inline-block w-[60px] font-light text-[14px] text-[#000000]">
                  Transport
                </div>
                <div className="m-[11px_0_11px_0] inline-block font-light text-[14px] text-[#000000]">
                  10.000 F CFA
                </div>
                <div className="rounded-[6px] bg-[#FF5B5B] relative flex p-[11px_16px_11px_16px] box-sizing-border">
                  <span className="font-bold text-[14px] text-[#FFFFFF]">
                    supprimer
                  </span>
                </div>
              </div>
              <div className="bg-[#E6E6E6] m-[0_0_24px_0] w-[1280px] h-[0px]">
              </div>
              <div className="m-[0_34px_0_34px] flex flex-row justify-between self-start w-[359px] box-sizing-border">
              <Link to='/Ajouterdepense'>
                <div className="m-[1px_9px_1px_0] inline-block w-[128px] font-normal text-[14px] text-[#D1C000]">
                  AJOUTER DEPENSE
                </div>
                </Link>
                <div className="flex w-[24px] h-[24px] box-sizing-border">
              
                </div>
              </div>
            </div>
            <div className="bg-[#E6E6E6] absolute left-[419px] top-[0px] w-[0px] h-[351px]">
            </div>
            <div className="bg-[#E6E6E6] absolute right-[418px] bottom-[0px] w-[0px] h-[351px]">
            </div>
          </div>
          <div className="m-[0_0_20px_0] inline-block self-start font-normal text-[32px] text-[#D1C000]">
            Liste des revenus
          </div>
          <div className="border-[1px_solid_#E6E6E6] relative flex p-[21px_0_25px_0] w-[1280px] box-sizing-border">
            <div className="relative flex flex-col w-[1280px] h-[fit-content] box-sizing-border">
              <div className="m-[0_34px_35px_34px] flex flex-row justify-between self-start w-[961.5px] box-sizing-border">
                <span className="m-[0_15px_0_0] w-[64px] font-normal text-[24px] text-[#FFFFFF]">
                  TITRE
                </span>
                <span className=" font-normal text-[24px] text-[#FFFFFF]">
                  MONTANT
                </span>
                <span className="font-normal text-[24px] text-[#FFFFFF]">
                  ACTIONS
                </span>
              </div>
              <div className="m-[0_34px_15px_34px] flex flex-row justify-between self-start w-[962px] box-sizing-border">
                <div className="m-[11px_9px_11px_0] inline-block w-[44px]  font-light text-[14px] text-[#000000]">
                  Salaire
                </div>
                <div className="m-[11px_0_11px_0] inline-block font-normal text-[14px] text-[#000000]">
                  300.000 FCFA
                </div>
                <div className="rounded-[6px] bg-[#FF5B5B] relative flex p-[11px_16px_11px_16px] box-sizing-border">
                  <span className=" font-bold text-[14px] text-[#FFFFFF]">
                    supprimer
                  </span>
                </div>
              </div>
              <div className="bg-[#E6E6E6] m-[0_0_14px_0] w-[1280px] h-[0px]">
              </div>
              <div className="m-[0_34px_15px_34px] flex flex-row justify-between self-start w-[962px] box-sizing-border">
                <div className="m-[11px_9px_11px_0] inline-block w-[57px]  font-light text-[14px] text-[#000000]">
                  Business
                </div>
                <div className="m-[11px_0_11px_0] inline-block font-light text-[14px] text-[#000000]">
                  100.000 F CFA
                </div>
                <div className="rounded-[6px] bg-[#FF5B5B] relative flex p-[11px_16px_11px_16px] box-sizing-border">
                  <span className="font-bold text-[14px] text-[#FFFFFF]">
                    supprimer
                  </span>
                </div>
              </div>
              <div className="bg-[#E6E6E6] m-[0_0_14px_0] w-[1280px] h-[0px]">
              </div>
              <div className="m-[0_34px_15px_34px] flex flex-row justify-between self-start w-[962px] box-sizing-border">
                <div className="m-[11px_9px_11px_0] inline-block w-[40px]  font-light text-[14px] text-[#000000]">
                  Bonus
                </div>
                <div className="m-[11px_0_11px_0] inline-block font-light text-[14px] text-[#000000]">
                  30.000 F CFA
                </div>
                <div className="rounded-[6px] bg-[#FF5B5B] relative flex p-[11px_16px_11px_16px] box-sizing-border">
                  <span className=" font-bold text-[14px] text-[#FFFFFF]">
                    supprimer
                  </span>
                </div>
              </div>
              <div className="bg-[#E6E6E6] m-[0_0_24px_0] w-[1280px] h-[0px]">
              </div>
              <div className="m-[0_34px_0_34px] flex flex-row justify-between self-start w-[359px] box-sizing-border">
              <Link to='/Ajouterrevenu'>
                <div className="m-[1px_9px_1px_0] inline-block w-[120px] font-normal text-[14px] text-[#D1C000]">
                  AJOUTER REVENU
                </div>
                </Link>
                <div className="flex w-[24px] h-[24px] box-sizing-border">
              
                </div>
              </div>
            </div>
            <div className="bg-[#E6E6E6] absolute left-[419px] top-[0px] w-[0px] h-[351px]">
            </div>
            <div className="bg-[#E6E6E6] absolute right-[418px] bottom-[0px] w-[0px] h-[351px]">
            </div>
          </div>
        </div>
      </div>
    ) 
  }
  export default PageBudget;