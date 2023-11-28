import React, { useEffect } from 'react'
import { scrollTop } from '../../utils/functions/scrollTop'

function Privacy() {
    useEffect(() => {
        scrollTop()
      },[])
  return (
    <div className='default-page-container'>
    <h1 class="document-header">Polityka prywatności sklepu Spellarium</h1>
    <ol>
        <li className='document-list-header'> Zbieranie informacji
            <ol>
                <li className='document-list-item'>Duis id mi non purus laoreet posuere. Sed ac sapien quis justo dapibus posuere. Suspendisse potenti. Proin
                eleifend risus sit amet metus ullamcorper, a accumsan mi varius. Vestibulum ullamcorper purus et dui tincidunt, non
                varius metus egestas. Aliquam a magna sed odio cursus posuere. In interdum tellus id ex finibus, a egestas mi
                pretium.</li>
                <li className='document-list-item'> Aenean congue purus vel magna posuere, at facilisis eros dictum. Sed in ligula eu urna iaculis gravida. Nunc
                suscipit auctor erat, sed scelerisque erat pellentesque nec. Suspendisse et eros aliquet, feugiat risus nec,
                ultrices elit.</li>  
                <li className='document-list-item'>Sed tincidunt turpis a quam efficitur fringilla. Proin eu quam vitae dui congue semper vitae et justo. Cras
                 tincidunt purus id ligula vulputate, non accumsan ex fermentum. Proin nec ipsum vel elit varius tristique ut id
                 libero. Integer sed quam ut metus vestibulum rutrum.</li>          
            </ol>
        </li>
        <li className='document-list-header'> Wykorzystanie informacji
            <ol>
                <li className='document-list-item'>Duis id mi non purus laoreet posuere. Sed ac sapien quis justo dapibus posuere. Suspendisse potenti. Proin
                eleifend risus sit amet metus ullamcorper, a accumsan mi varius. Vestibulum ullamcorper purus et dui tincidunt, non
                varius metus egestas. Aliquam a magna sed odio cursus posuere. In interdum tellus id ex finibus, a egestas mi
                pretium.</li>
                <li className='document-list-item'>Sed tincidunt turpis a quam efficitur fringilla. Proin eu quam vitae dui congue semper vitae et justo. Cras
                 tincidunt purus id ligula vulputate, non accumsan ex fermentum. Proin nec ipsum vel elit varius tristique ut id
                 libero. Integer sed quam ut metus vestibulum rutrum.</li>
                <li className='document-list-item'> Aenean congue purus vel magna posuere, at facilisis eros dictum. Sed in ligula eu urna iaculis gravida. Nunc
                suscipit auctor erat, sed scelerisque erat pellentesque nec. Suspendisse et eros aliquet, feugiat risus nec,
                ultrices elit.</li>
            </ol>
        </li>
        <li className='document-list-header'> Ujawnianie informacji
            <ol>
                <li className='document-list-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in felis sed lorem fringilla convallis. Morbi
                    vel ex vitae ipsum tristique vulputate. Quisque auctor mi et ligula vestibulum, non bibendum est consequat. Fusce
                    auctor mauris vitae magna fringilla, in eleifend est bibendum.</li>
                <li className='document-list-item'>Sed tincidunt turpis a quam efficitur fringilla. Proin eu quam vitae dui congue semper vitae et justo. Cras
                 tincidunt purus id ligula vulputate, non accumsan ex fermentum. Proin nec ipsum vel elit varius tristique ut id
                 libero. Integer sed quam ut metus vestibulum rutrum.</li>
            </ol>
        </li>
    </ol>
</div>
  )
}

export default Privacy
