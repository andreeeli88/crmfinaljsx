import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Nosotros from './Nosotros';
import SoEasy from './SoEasy';
import CrmEstado from './CrmEstado';
import Productos from './Productos';
import Actividades from './Actividades';
import Cuentas from './Cuentas';


const RoutesComponent = () => {
  return (
    <div>
        <Routes>
            <Route path='/SoEasy' element={ <SoEasy/> } ></Route>
            <Route path='/Nosotros' element={ <Nosotros/> }></Route>
            <Route path='/CrmEstado' element={ <CrmEstado/> }></Route>
            <Route path='/Productos' element={ <Productos/> }></Route>
            <Route path='/Actividades' element={ <Actividades/> }></Route>
            <Route path='/Cuentas' element={ <Cuentas/> }></Route>

        </Routes>
    </div>
  )
}

export default RoutesComponent