import './CRL.css'
import C from './comment';
import R from './commentReply';

function CRLine() {

    return (
        <div className='container'>

            <div>
                <C/>
            </div>
            <div>
                <R/>
            </div>
            <div>
                <C/>
            </div>
            

        </div>
    )

}

export default CRLine;