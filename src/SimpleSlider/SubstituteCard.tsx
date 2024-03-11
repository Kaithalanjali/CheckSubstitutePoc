import patient from '../assets/patient.jpg';
import ellipse from '../assets/ellipse.jpg';
import linkAccount from '../assets/linkAccount.svg';
import nonReturnable from '../assets/nonReturnable.svg';
import reprocessed from '../assets/reprocessed.svg';
import temperature from '../assets/temperature.svg';
import formulary from '../assets/formulary.svg';
import contract from '../assets/contract.svg';
import yellow from '../assets/yellow.svg';
import bluebox from '../assets/bluebox.svg';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
import info from '../assets/info.svg';
import downarrow from '../assets/downarrow.svg';

function SubstituteCard(props:any) {

  return (
    <>
      <div style={{
        borderRadius: '10px', border: '1px solid var(--Border-Subtle, #DFE1E5)', background: '#FFF', width: '376px', height: '654px'
      }}>

        <div style={{
          display: 'inline-flex', padding: '0px 16px', alignItems: 'center', borderRadius: '10px 0px',
          borderLeft: '5px solid var(--Blue-2, #B2D4FF)',
          background: 'var(--Component-Colors-Table-Selected, #DEEBFF)',
          boxShadow: '0px 2px 7px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)'
        }}>

          <div style={{
            color: ' var(--Text-Primary, #091E42)',
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '34px', /* 142.857% */
            letterSpacing: '0.2px'
          }}>Original Item {props.slide}</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px',
          // border: '0.5px solid red',   /*Here is 8px*/
          padding: '12px'
        }}>



          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '10px',
            alignSelf: 'stretch'
          }}>
            <img src={patient} alt="" style={{ width: '130px', height: '130px' }} />
          </div>




          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            gap: '12px',
            flex: '1 0 0',
            flexWrap: 'wrap'
          }}>
            <div style={{ position: 'relative', width: ' 24px', height: '24px', flexShrink: '0' }}>
              <img src={ellipse} alt="" style={{
                width: ' 24px', height: '24px', flexShrink: '0',
                fill: 'var(--Main-Primary, #0052CC)',
                strokeWidth: '0.978px', stroke: 'var(--Main-Primary, #0052CC)',
              }} />
              <img src={linkAccount} alt="" style={{
                width: '12px', height: '12px', flexShrink: '0',
                position: 'absolute',
                top: '6px',
                left: '6px'
              }} />
            </div>
            <div style={{
              width: '1px',
              height: '24px',
              background: '#5E6C84',
              display: 'flex',
              alignItems: 'flex-start',
              alignContent: 'flex-start',
            }} />
            <img src={nonReturnable} alt="" style={{
              width: ' 24px', height: '24px'
            }} />
            <img src={reprocessed} alt="" style={{
              width: ' 24px', height: '24px'
            }} />
            <img src={reprocessed} alt="" style={{
              width: ' 24px', height: '24px'
            }} />
            <img src={temperature} alt="" style={{
              width: ' 24px', height: '24px'
            }} />
          </div>
          <div style={{
            width: '352px',
            height: '1px', display: 'flex', background: '#DFE1E5'
          }}>
          </div>
          <div style={{
            display: 'flex',
            minHeight: '24px',
            maxHeight: '24px',
            flex: '1 0 0',
            color: 'var(--Main-Primary, #0052CC)',
            fontFamily: 'Open Sans',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '24px',/* 171.429% */
            letterSpacing: '0.2px',
          }}>
            00000000000000{props.slide}
          </div>
          <div style={{
            width: '352px', height: '48px',
            overflow: 'hidden',
            color: 'var(--Text-Primary, #091E42)',
            textOverflow: 'ellipsis',
            ///whiteSpace: 'nowrap',
            fontFamily: 'Open Sans',
            fontSize: '17px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '24px', /* 150% */
            letterSpacing: '0.2px',
          }}>
            Chemo-Safety Universal Vented Vial Access Device with 0.2 Micron Hydrophobic Air...
          </div>
          <div style={{
            width: '352px',
            color: 'var(--Border-Medium-Contrast, #6B768A)',
            fontFamily: 'Open Sans',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '20px', /* 142.857% */
            letterSpacing: '0.2px',
          }}>
            AmerisourceBergen Corp. (ABC)
          </div>
          <div style={{
            display: 'flex',
            width: '352px',
            padding: '8px 0px',
            //alignItems: 'flex-start',
            alignContent: 'flex-start',
            gap: '8px 12px',
            flexWrap: 'wrap',
            // justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src={formulary} alt=""
              style={{
                width: '24px',
                height: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'

              }} />
            <div style={{
              color: 'var(--Text-Primary, #091E42)',
              fontFamily: "Open Sans",
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              //lineWeight: '24px', /* 171.429% */
              letterSpacing: '0.2px',
            }} >Formulary</div>
            <div style={{ width: '1px', height: '24px', background: '#DFE1E5', display: 'flex' }}></div>
            <img src={contract} alt=""
              style={{
                width: '24px',
                height: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'

              }} />
            <div style={{
              color: 'var(--Text-Primary, #091E42)',
              fontFamily: "Open Sans",
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              //lineWeight: '24px', /* 171.429% */
              letterSpacing: '0.2px',
            }} >Contract</div>
          </div>
          <div style={{
            display: 'flex',
            padding: '12px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '10px',
            alignSelf: 'stretch',
            borderRadius: '4px',
            background: 'var(--Background-Input-Fields-on-White, #F4F5F7)'
          }}>

            <div style={{
              display: 'flex',
              alignItems: ' flex-start',
              gap: '12px',
              alignSelf: 'stretch',
            }}>

              <img src={yellow} alt="" style={{ width: '20px', height: '20px', fill: 'var(--yellow-orange-4, #FFC400)' }} />
              <span style={{
                color: 'var(--Text-Primary, #091E42)',
                fontFamily: "Open Sans",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                flex: '1 0 0'
              }}>
                Allocated Product - Fulfillment subject to availability.
              </span>
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            rowGap: '8px',
            alignSelf: 'stretch',
            flexWrap: 'wrap',
          }}>
            <div style={{
              color: 'var(--Text-Primary, #091E42)',
              textAlign: 'center',
              fontFamily: "Open Sans",
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '28px', /* 140% */
            }}>$9999.99</div>
            <div style={{
              color: 'var(--Text-Primary, #091E42)',
              textAlign: 'center',
              fontFamily: "Open Sans",
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '28px', /* 140% */
            }}>$9999.99</div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            gap: '8px',
            alignSelf: 'stretch',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', position: 'relative' }}>
              <img src={bluebox} alt="" />
              <img src={minus} alt="" style={{ position: 'absolute', top: '14px', left: '7px' }} />
              <div style={{
                width: '40px',
                height: '30px',
                flexShrink: '0',
                border: '1px solid var(--Border-Medium-Contrast, #6B768A)',
                background: '#FFF',
                alignItems: 'center',
              }}>
                <div style={{
                  width: '25px', height: '24px', flexShrink: '0',
                  color: "var(--Text-Primary, #091E42)",
                  textAlign: 'center',
                  fontFamily: "Open Sans",
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '24px', /* 150% */
                  margin: 'auto'
                }}>5</div>
              </div>
              <img src={bluebox} alt="" />
              <img src={plus} alt="" style={{ position: 'absolute', top: '7px', left: '77px' }} />
            </div>
            <div style={{
              display: 'flex',
              height: '36px',
              padding: '6px 16px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}>

              <div style={{
                color: '#0052CC',
                textAlign: 'center',
                fontFamily: "Open Sans",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '24px', /* 150% */
              }}>Reset</div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            alignSelf: 'stretch',
          }}>
            <img src={info} alt="" style={{ width: '20px', height: '20px' }} />
            <div style={{
              color: 'var(--Text-Primary, #091E42)',
              /* Desktop & Mobile/Heading H9 */
              fontFamily: "Open Sans",
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '20px', /* 142.857% */
              flex: '1 0 0'
            }}>Order in quantities of 5</div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            gap: '12px',
            alignSelf: 'stretch',
            flexWrap: 'wrap',
          }}>
            <div style={{
              display: 'flex',
              height: '20px',
              padding: '6px 12px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '2px',
              border: '1px solid var(--Border-Subtle, #DFE1E5)',
              background: '#FFF',
            }}>
              <div style={{
                color: '#000',
                fontFamily: "Open Sans",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '24px', /* 150% */
              }}>EA</div>
            </div>

            <div style={{
              display: 'flex',
              height: '20px',
              padding: '6px 12px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '2px',
              border: '1px solid var(--Component-Colors-Visuals, #2684FF)',
              background: 'var(--Component-Colors-Table-Selected, #DEEBFF)',
            }}>
              <div style={{
                color: 'var(--Text-Primary, #091E42)',
                fontFamily: "Open Sans",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '24px', /* 150% */
              }}>CS</div>
              <div style={{ width: '1px', height: '18px', background: '#0052CC' }}></div>
              <div style={{
                color: 'var(--Text-Primary, #091E42)',
                fontFamily: "Open Sans",
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '20px', /* 142.857% */
              }}>120/CS</div>
            </div>
            <div style={{
              display: 'flex',
              height: '20px',
              padding: '6px 12px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '2px',
              border: '1px solid var(--Component-Colors-Visuals, #2684FF)',
              background: 'var(--Component-Colors-White, #FFF)',
            }}>
              <div style={{
                color: 'var(--Text-Primary, #091E42)',
                fontFamily: "Open Sans",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '24px', /* 150% */
              }}>BX</div>
              <div style={{ width: '1px', height: '18px', background: '#0052CC' }}></div>
              <div style={{
                color: 'var(--Text-Primary, #091E42)',
                fontFamily: "Open Sans",
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '20px', /* 142.857% */
              }}>10/BX</div>
            </div>
          </div>


        </div >
        <div style={{
          width: '376px', height: '29.968px', flexShrink: '0', borderRadius: '0px 0px 8px 8px',
          borderRight: '1px solid var(--Border-Subtle, #DFE1E5)',
          borderBottom: '1px solid var(--Border-Subtle, #DFE1E5)',
          borderLeft: '1px solid var(--Border-Subtle, #DFE1E5)',
          background: 'var(--Background-Secondary-Containers, #F4F5F7)',
          position: 'relative'
        }}>
          <img src={downarrow} alt="" style={{ width: '30px', height: '30px', flexShrink: '0', position: 'absolute', left: '173px', bottom: '0.03px' }} />
        </div>


      </div >
    </>
  )
}

export default SubstituteCard;