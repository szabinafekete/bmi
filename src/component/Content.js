import React, {useState} from 'react';
import {Colorscale} from 'react-colorscales';
import arrow from './../svg/arrow.svg';

export const Content = () => {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("")
  const [message, setMessage] = useState("")
  
  const viridisColorscale = ['#0d6efd', '#0dcaf0', '#20c997', '#198754', '#ffc107', '#fd7e14', '#dc3545', '#842029'];

    let calcBmi = (e) => {
        e.preventDefault()
        if (weight === 0 || height === 0)
        {
          alert('Kérlek add meg a súlyod és a magasságod!')
        }
        else
        {
          let bmi = weight / ((height/100)^2)
          setBmi(bmi.toFixed(1))
          document.getElementById("arrow").style.display = 'block';
          if (bmi < 16) {
            setMessage("Súlyosan sovány vagy.");
            /*document.getElementById("arrow-svg").style.color = '#0d6efd';*/
            document.getElementById("arrow").style.left = '-43.75%'
          }
          else if (bmi >= 16 && bmi < 17) {
            setMessage("Mérsékelten sovány vagy.");
            /*document.getElementById("arrow-svg").style.color = '#0dcaf0';*/
            document.getElementById("arrow").style.left = '-31.25%'
          }
          else if (bmi >= 17 && bmi < 18.5) {
            setMessage("Enyhén sovány vagy.");
            /*document.getElementById("arrow-svg").style.color = '#20c997';*/
            document.getElementById("arrow").style.left = '-18.75%'
          }
          else if (bmi >= 18.5 && bmi < 25) {
            setMessage("A testsúlyod normális.");
            /*document.getElementById("arrow-svg").style.color = '#198754';*/
            document.getElementById("arrow").style.left = '-6.25%'         
          }
          else if (bmi >= 25 && bmi < 30) {
            setMessage("Túlsúlyos vagy.");
            /*document.getElementById("arrow-svg").style.color = '#ffc107';*/
            document.getElementById("arrow").style.left = '6.25%'
          }
          else if (bmi >= 30 && bmi < 35) {
            setMessage("Az I. fokú elhízási fázisban vagy.");
            /*document.getElementById("arrow-svg").style.color = '#fd7e14';*/
            document.getElementById("arrow").style.left = '18.75%'
          }
          else if (bmi >= 35 && bmi < 40) {
            setMessage("Az II. fokú elhízási fázisban vagy.");
            /*document.getElementById("arrow-svg").style.color = '#dc3545';*/
            document.getElementById("arrow").style.left = '31.25%'
          }
          else {
            setMessage("Az III. fokú elhízási fázisban vagy.");
            /*document.getElementById("arrow-svg").style.color = '#842029';*/
            document.getElementById("arrow").style.left = '43.75%'
          }    
        }
      }

      let reload = () => {
        window.location.reload()
      }
      
    return (
    <div>
        <form>
            <div>
                <label className="form-label" htmlFor="weight">Testsúly (kg)</label>
                <input className="form-control" type="text" name="weight" id="weight" value={weight} 
                onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div className="mt-3">
                <label className="form-label" htmlFor="height">Magasság (cm)</label>
                <input className="form-control" type="text" name="height" id="height" value={height} 
                onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <div>
                <button className="btn btn-primary w-100 mt-3" onClick={calcBmi} type="submit">Kiszámol</button>
                <button className="btn btn-outline-primary w-100 mt-2" onClick={reload} type="submit">Töröl</button>
            </div>
        </form>
        <div>
          <div className="mt-2 text-center">
            <h5>A testtömeg-indexed</h5>
            <h5 className="bmi">{bmi}</h5>
            <p className='message'>{message}</p>
          </div>
          <div>
            <Colorscale
              colorscale={viridisColorscale}
            /> 
          </div>
          <div id="arrow" className='arrow'>
            <img src={arrow} className='m-0'/>
          </div>
        </div>
    </div>
  )
}
