import React from 'react'
import { Container, FormBox } from './styles'
import api from '../../services/api'
import { Form, Input, Select } from '@rocketseat/unform'

const Activity: React.FC = () => {

  const kalacheCapital = [
    { id: 'Financeiro', title: 'Financeiro' },
    { id: 'Conhecimento', title: 'Conhecimento' },
    { id: 'Saúde', title: 'Saúde' },
    { id: 'Relacionamento', title: 'Relacionamento' }
  ]

  const lifeAspect = [
    { id: 'Espiritualidade', title: 'Espiritualidade' },
    { id: 'Equilíbrio Emocional', title: 'Equilíbrio Emocional' },
    { id: 'Saúde e Bem Estar', title: 'Saúde e Bem Estar' },
    { id: 'Realização e Propósito', title: 'Realização e Propósito' },
    { id: 'Desenvolvimento Pessoal', title: 'Desenvolvimento Pessoal' },
    { id: 'Profissional', title: 'Profissional' },
    { id: 'Financeiro', title: 'Financeiro' },
    { id: 'Social e Lazer', title: 'Social e Lazer' },
    { id: 'Relação Conjugal', title: 'Relação Conjugal' },
    { id: 'Família', title: 'Família' },
  ]

  function handleSubmit(data: object): void {
    api.post('/', data)
      .then((response) => {
        console.log(response)
        alert('Cadastrado com Sucesso')
      }).catch((err) => {
        alert('Erro ao cadastrar tente novamente')
      })
  }

  return (<Container >
    <FormBox>
      <h1>Cadastrar uma Atividade</h1>
      <Form onSubmit={handleSubmit}>
        <Input name='name' placeholder='Nome da Atividade' />
        <Select name='kalacheCapital' options={kalacheCapital} placeholder='Escolha um Capital' />
        <Select name='lifeAspect' options={lifeAspect} placeholder='Aspecto da Roda da Vida' />
        <Input name='totalInvest' placeholder='Investimento em R$' />
        <Input name='enrollQuantity' type='number' placeholder='Qtd. de Vagas por Ciclo' />
        <Input name='start' type='date' placeholder='Data de Inicio' />
        <Input name='end' type='date' placeholder='Data de Termino' />
        <Input name='cycleQuantity' type='number' placeholder='Qtd. de Ciclos' />
        <button type='submit'>Enviar </button>
      </Form>
      <a href="dashboard">
        Ver a lista de Atividades
        </a>
    </FormBox>
  </Container>)
}

export default Activity;

