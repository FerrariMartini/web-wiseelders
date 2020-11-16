import React, { useEffect, useState } from 'react'
import { Container, FormBox } from './styles'
import api from '../../services/api'
import { Form, Input, Scope } from '@rocketseat/unform'
import { useRouteMatch } from 'react-router-dom'
import IActivity from '../../interfaces/activity'

interface activityParams {
  activityId: string;
}


const Activity: React.FC = () => {
  const { params } = useRouteMatch<activityParams>()
  const [activity, setActivity] = useState<IActivity | null>(null)

  useEffect(() => {
    api.get(`${params.activityId}`).then(response => {
      const activity = response.data
      setActivity(activity)
    }).catch((err) => {
      console.log('>> ERROR', err)
      alert('Servico indisponivel no momento. Tente novamente mais tarde')
    })
  }, [params.activityId])

  function handleSubmit(data: object): void {

    const dataToSend = {
      activity: activity,
      cyclesUpdated: data,
    }

    api.put(`/${params.activityId}`, dataToSend)
      .then((response) => {
        console.log(response)
        alert('Update com Sucesso')
      }).catch((err) => {
        alert('Erro tente novamente')
      })
  }



  return (<Container >
    <FormBox>
      {activity && (
        <>
          <h1>Atualizar os Ciclos da Atividade: {activity.name}</h1>
          <Form onSubmit={handleSubmit}>
            {
              activity.cycles.map((cycle, index) => {
                return <div key={index}>
                  <Scope path={`cycle-${index}`}>
                    <div>Ciclo</div>
                    <Input name="cycleNumber" type='number' readOnly={true} value={cycle.cycleNumber} />
                    <div>  Qtd. de pessoas presentes</div>
                    <Input name="attendantQuantity" type='number' placeholder={cycle.attendantQuantity.toString()} />
                    <div>Investimento Total nesse Ciclo</div>
                    <Input name="unitaryInvest" type='number' placeholder={cycle.unitaryInvest.toString()} />
                  </Scope>
                </div>
              })
            }
            <button type='submit'>Enviar </button>
          </Form>
        </>
      )}

      <a href="/dashboard">
        Ver a lista de Atividades
        </a>
    </FormBox>
  </Container>)
}

export default Activity;

