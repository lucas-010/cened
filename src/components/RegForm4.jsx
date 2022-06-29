import { Checkbox, TextField } from '@mui/material';
import React from 'react';

export default function RegForm4({data, setData, generalClauses, setGeneralClauses}){
    return(
        <div className="flex flex-col w-5/6 p-10">
          <div className="text-gray-600 lg:ml-10 flex justify-between">
            <div className="text-xl">
              <div id="outterForm4">
                <p>Crie a senha para acessar a Área do Aluno</p>
                <div id="Form4">
                  <TextField
                    onChange={(e) =>
                      setData((data) => ({
                        ...data,
                        aluno: {
                          ...data.aluno,
                          senha: e.target.value.toUpperCase(),
                        },
                      }))
                    }
                    style={{ margin: "1%" }}
                    variant="outlined"
                    type="password"
                    value={data.aluno.senha}
                    id="senha"
                    label="Senha"
                    className="lg:w-2/5"
                  ></TextField>
                  <TextField
                    onChange={(e) =>
                      setData((data) => ({
                        ...data,
                        aluno: {
                          ...data.aluno,
                          confirmarSenha: e.target.value.toUpperCase(),
                        },
                      }))
                    }
                    style={{ margin: "1%" }}
                    variant="outlined"
                    type="password"
                    value={data.aluno.confirmarSenha}
                    id="confirmarSenha"
                    label="Confirmar senha"
                    className="lg:w-2/5"
                  ></TextField>
                </div>
              </div>
            </div>
            <div className="lg:flex hidden flex-col max-w-md">
              <div className="flex font-bold text-2xl items-center">
                <Checkbox
                  onChange={() => {
                    !generalClauses
                      ? setGeneralClauses(true)
                      : setGeneralClauses(false);
                  }}
                ></Checkbox>
                Cláusulas Gerais
              </div>
              <div className="flex">
                <h3 className="text-base">
                  O cursista e/ou preposto declara(m) estar ciente(s) e
                  concorda(m) com as{" "}
                  <a
                    className="text-blue-600 font-bold"
                    href="https://google.com"
                  >
                    CLÁUSULAS GERAIS
                  </a>{" "}
                  que integram o presente Contrato de Prestação de Serviços
                  Educacionais.
                </h3>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex flex-col max-w-md">
            <div className="flex font-bold text-xl items-center">
              <Checkbox
                onChange={() => {
                  !generalClauses
                    ? setGeneralClauses(true)
                    : setGeneralClauses(false);
                }}
              ></Checkbox>
              Cláusulas Gerais
            </div>
            <div className="flex">
              <h3 className="text-base">
                O cursista e/ou preposto declara(m) estar ciente(s) e
                concorda(m) com as{" "}
                <a
                  className="text-blue-600 font-bold"
                  href="https://google.com"
                >
                  CLÁUSULAS GERAIS
                </a>{" "}
                que integram o presente Contrato de Prestação de Serviços
                Educacionais.
              </h3>
            </div>
          </div>
        </div>
        
    )
}