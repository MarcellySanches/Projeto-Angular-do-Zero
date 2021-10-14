export interface MenuItem {
  descricao: string;
  icone: string;
  route: string;

  //Isso nos permitirá especificar qual item de menu mostrar no menu de botões ou menu suspenso e em quais tamanhos de tela.
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
}
