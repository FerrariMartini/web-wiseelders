import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, TableBox } from './styles'
import api from '../../services/api'


interface activity {
  _id: string,
  name: string,
  kalacheCapital: string,
  lifeAspect: string,
  totalInvest: string,
  cycle: {
    start: Date,
    end: Date,
    quantity: Number,
  },
  enrollQuantity: string
}

const Dashboard: React.FC = () => {
  const [activities, setActivities] = useState<activity[]>([])

  useEffect(() => {
    loadActivities()
  }, [])


  function loadActivities() {
    api.get('/').then(response => {
      const activities = response.data
      setActivities(activities)
    }).catch((err) => {
      console.log('>> ERROR', err)
      alert('Servico indisponivel no momento. Tente novamente mais tarde')
    })
  }


  function handleDelete(data: any) {
    const activityId = data?.currentTarget?.id
    api.delete(`${activityId}`,)
      .then((response) => {
        loadActivities()
        alert('Atividade deletada com Sucesso')
      }).catch((err) => {
        loadActivities()
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
                <tr key={act._id}>
                  <td>{act.name}</td>
                  <td>{act.kalacheCapital}</td>
                  <td>{act.lifeAspect}</td>
                  <td>{new Date(act.cycle.start).toLocaleDateString("pt-BR")}</td>
                  <td>{new Date(act.cycle.end).toLocaleDateString("pt-BR")}</td>
                  <td>{act.cycle.quantity}</td>
                  <td>{act.enrollQuantity}</td>
                  <td>R$ {act.totalInvest}</td>
                  <td><button id={act._id} onClick={handleDelete} >Excluir</button> </td>
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



