
const Option = (props) => {

    let arr = [
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
    ]

  return (
    <select onChange={(e) => props.actionProvider.handleAge(e.target.value)} name="" id="" style={{width: '100px', padding: '5px 0px'}}>
        {arr.map((item,idx) => (
            <option key={idx} value={item}>{item}</option>
        ))}
    </select>
  )
}

export default Option