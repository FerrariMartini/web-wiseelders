import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, TableBox } from './styles'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import IActivity from '../../interfaces/activity'

const Dashboard: React.FC = () => {
  const [activities, setActivities] = useState<IActivity[]>([])

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
                <th>Total Investido</th>
                <th>Total de Vagas por Ciclo</th>
                <th>Data de Inicio</th>
                <th>Data de Termino</th>
                <th>Qtd. de Ciclos</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(act => (
                <tr key={act._id}>
                  <td>{act.name}</td>
                  <td>{act.kalacheCapital}</td>
                  <td>{act.lifeAspect}</td>
                  <td>{parseFloat(act.totalInvest).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                  <td>{parseInt(act.enrollQuantity).toLocaleString('pt-br')}</td>
                  <td>{new Date(act.start).toLocaleDateString("pt-BR")}</td>
                  <td>{new Date(act.end).toLocaleDateString("pt-BR")}</td>
                  <td>{act.cycleQuantity}</td>
                  <td ><Link style={{ margin: 0 }} key={act.name} to={`/cycles/${act._id}`}>Atualizar Ciclos</Link></td>
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



