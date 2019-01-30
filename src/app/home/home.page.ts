import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { List } from '../models/list.model';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public lists: List[] = [];
  public list: List;

  constructor(private alertCtrl: AlertController) {
    // this.load();
    if (this.lists.length === 0) {
      this.showAddList();
    }
  }

  async load() {
    const data = new List('Compras', []);
    data.tasks.push(new Task('Shampoo', false));
    data.tasks.push(new Task('Sabonete', false));
    data.tasks.push(new Task('Perfume', false));
    data.tasks.push(new Task('Creme de Barbear', false));
    this.list = data;
  }

  async addList(title: String) {
    this.lists.push(new List(title, []));
    this.list = this.lists[this.lists.length - 1];
  }

  async addItem(title: String) {
    this.list.tasks.push(new Task(title, false));
  }

  async showAddList() {
    const alert = await this.alertCtrl.create({
      header: 'Lista de Tarefa',
      subHeader: 'Criar nova lista de tarefas',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nome da lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Salvar',
          handler: (data) => {
            this.addList(data.title);

          }
        }
      ]
    });

    await alert.present();
  }

  async showAddTask() {
    const alert = await this.alertCtrl.create({
      header: 'Compras',
      subHeader: 'Criar nova tarefa em Compras',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nome da tarefa'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Salvar',
          handler: (data) => {
            this.addItem(data.title);
          }
        }
      ]
    });

    await alert.present();
  }

  async showLists() {
    const alert = await this.alertCtrl.create({
      header: 'Suas Listas',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Selecionar',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.inputs.push({
      name: 'OLHA EU AQUI',
      type: 'radio',
      label: 'OLHA EU AQUI',
      value: 'VALOR'
    });

    await alert.present();
  }
}
