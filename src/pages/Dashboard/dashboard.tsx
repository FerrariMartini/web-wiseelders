import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, TableBox } from './styles'
import api from '../../services/api'


interface activity {
  id: string,
  activityName: string,
  kalacheCapital: string,
  lifeAspect: string,
  totalInvest: string,
  cycleStartDate: string,
  cycleEndDate: string,
  cycleQuantity: string,
  enrollQuantities: string
}

const Dashboard: React.FC = () => {
  const [activities, setActivities] = useState<activity[]>([])

  useEffect(() => {
    api.get('allActivities').then(response => {
      const activities = response.data
      setActivities(activities)
    }).catch((err) => {
      console.log('>> ERROR', err)
      alert('Servico indisponivel no momento. Tente novamente mais tarde')
    })
  }, [])

  function handleDelete(data: any) {
    const activityId = data?.currentTarget?.id
    api.delete(`delete/${activityId}`,)
      .then((response) => {
        console.log(response)
        alert('Atividade deletada com Sucesso')
      }).catch((err) => {
        console.log('>> ERROR', err)
        alert('Erro ao deletar tente novamente')
      })
  }

  return (
    <>
      <Container>
        <TableBox>
          <h1>Resumo das Atividades</h1>
          <table>
            <thead>
              <tr>
                <th>Nome da Atividade</th>
                <th>Capital</th>
                <th>Aspectos da Vida</th>
                <th>Data de Inicio</th>
                <th>Data de Termino</th>
                <th>Qtd. de Ciclos</th>
                <th>Total de Inscritos</th>
                <th>Total Investido</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(act => (
                <tr key={act.id}>
                  <td>{act.activityName}</td>
                  <td>{act.kalacheCapital}</td>
                  <td>{act.lifeAspect}</td>
                  <td>{act.cycleStartDate}</td>
                  <td>{act.cycleEndDate}</td>
                  <td>{act.cycleQuantity}</td>
                  <td>{act.enrollQuantities}</td>
                  <td>R$ {act.totalInvest}</td>
                  <td><button id={act.id} onClick={handleDelete} >Excluir</button> </td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="/">
            Cadastrar Atividades </a>
        </TableBox>

      </Container>
    </>
  )
}

export default Dashboard;



