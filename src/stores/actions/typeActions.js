import * as actionTypes from "../constants/types";
import {
} from "../constants/api";
import { ActionStart, ActionSuccess, ActionFail } from "../../utils/utility";

//Tiers
export const Tiers = data => {
  return {
    type: actionTypes.TIERS,
    data
  };
};

export const TypeIdentite = natureTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPE_IDENTITE));
    return fetchTypeIdentite(natureTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPE_IDENTITE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPE_IDENTITE, error)));
  };
};

export const TypeIdentifiant = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPE_IDENTIFIANT));
    return fetchTypeIdentifiant()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPE_IDENTIFIANT, data)))
      .catch(error =>
        dispatch(ActionFail(actionTypes.TYPE_IDENTIFIANT, error))
      );
  };
};

export const ConvertTypeIdentite = (numeroTiers, code) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPEIDENTITELIST));
    return fetchTypeIdentite(numeroTiers)
      .then(res => res.json())
      .then(data =>
        data.filter(type => {
          return type.code === code;
        })
      );
  };
};

export const existeTiersWithIdentite = (
  natureTiers,
  TypeIdentite,
  numeroIdentite,
  numeroTiers
) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.EXISTEOTHERTIERWITHIDENTITE));
    return existeOtherTiersWithIdentite(
      natureTiers,
      TypeIdentite,
      numeroIdentite,
      numeroTiers
    )
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.EXISTEOTHERTIERWITHIDENTITE, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.EXISTEOTHERTIERWITHIDENTITE, error))
      );
  };
};

export const TypeIdentiteList = obj => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPEIDENTITE));
    return fetchTypeIdentiteList(obj)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPEIDENTITE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPEIDENTITE, error)));
  };
};

export const choixNatureTiersActions = numeroTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.CHOIXNATURETIERS));
    return choixNatureTiers(numeroTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.CHOIXNATURETIERS, data)))
      .catch(error =>
        dispatch(ActionFail(actionTypes.CHOIXNATURETIERS, error))
      );
  };
};

export const SearchCurrentPage = (obj, currentPage) => {
  return dispatch => {
    dispatch(SearchTiers(obj, currentPage));
  };
};

export const SearchTiers = (obj, currentPage) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.SEARCHTIERS, null));
    searchTiersbyObj(obj, currentPage)
      .then(res => res.json())
      .then(data => {
        if (data.content) {
          dispatch(ActionSuccess(actionTypes.SEARCHTIERS, data));
        } else {
          dispatch(ActionFail(actionTypes.SEARCHTIERS, "erreur", null));
        }
      })
      .catch(error =>
        dispatch(ActionFail(actionTypes.SEARCHTIERS, error, null))
      );
  };
};

export const ViderSearchTiers = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.VIDERSEARCHTIERS, null));
  };
};

//Categories Clients

export const Categories = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.CATEGORIES));
    return fetchCategories()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.CATEGORIES, data)))
      .catch(error => dispatch(ActionFail(actionTypes.CATEGORIES, error)));
  };
};

//Categories With Situation juridique

export const Cat_ST_Juridique = code => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.CAT_ST_JURIDIQUE));
    return fetchCategorieswithCode(code)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.CAT_ST_JURIDIQUE, data)))
      .catch(error =>
        dispatch(ActionFail(actionTypes.CAT_ST_JURIDIQUE, error))
      );
  };
};

//Categories Etablissement
export const CategoriesEtablissement = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.CATEGORIESETABLISSEMENT));
    return fetchCategoriesEtablissements()
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.CATEGORIESETABLISSEMENT, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.CATEGORIESETABLISSEMENT, error))
      );
  };
};

//Langue

export const Langue = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.LANGUE));
    return fetchLangue()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.LANGUE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.LANGUE, error)));
  };
};

//Juridique CDM

export const JuridiqueCDM = natureTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.JURIDIQUECDM));
    return fetchJuridiqueCDM(natureTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.JURIDIQUECDM, data)))
      .catch(error => dispatch(ActionFail(actionTypes.JURIDIQUECDM, error)));
  };
};

//Juridique BAM

export const JuridiqueBAM = codeFjCDM => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.JURIDIQUEBAM));
    return fetchJuridiqueBAM(codeFjCDM)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.JURIDIQUEBAM, data)))
      .catch(error => dispatch(ActionFail(actionTypes.JURIDIQUEBAM, error)));
  };
};

//List Juridique BAM

export const ListJuridiqueBAM = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.LISTJURIDIQUEBAM));
    return fetchListJuridiqueBAM()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.LISTJURIDIQUEBAM, data)))
      .catch(error =>
        dispatch(ActionFail(actionTypes.LISTJURIDIQUEBAM, error))
      );
  };
};

//Pays

export const Pays = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.PAYS));
    return fetchPays()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.PAYS, data)))
      .catch(error => dispatch(ActionFail(actionTypes.PAYS, error)));
  };
};

//Ville
export const Ville = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.VILLE));
    return fetchVille()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.VILLE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.VILLE, error)));
  };
};

//Ville By Code
export const VilleByCode = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.VILLEBYCODE));
    return fetchVilleByCode()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.VILLEBYCODE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.VILLEBYCODE, error)));
  };
};

//Local
export const LocalPostal = ville => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.LOCALPOSTAL));
    return fetchLocalPostal(ville)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.LOCALPOSTAL, data)))
      .catch(error => dispatch(ActionFail(actionTypes.LOCALPOSTAL, error)));
  };
};

//Code Postal

export const Postal = (ville, localite) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.POSTAL));
    return fetchCodePostaux(ville, localite)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.POSTAL, data)))
      .catch(error => dispatch(ActionFail(actionTypes.POSTAL, error)));
  };
};

//Pays Siege

export const PaysDeResidenceOuImmatriculation = code => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.PAYSDERESIDENCEOUIMMATRICULATION));
    return fetchPaysDeResidenceOuImmatriculation(code)
      .then(res => res.json())
      .then(data =>
        dispatch(
          ActionSuccess(actionTypes.PAYSDERESIDENCEOUIMMATRICULATION, data)
        )
      )
      .catch(error =>
        dispatch(
          ActionFail(actionTypes.PAYSDERESIDENCEOUIMMATRICULATION, error)
        )
      );
  };
};

//Agent BAM
export const AgentBAM = (codeFjBAM, natureTiers) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.AGENTBAM));
    return fetchAgentBAM(codeFjBAM, natureTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.AGENTBAM, data)))
      .catch(error => dispatch(ActionFail(actionTypes.AGENTBAM, error)));
  };
};

//Agent CDM
export const AgentCDM = codeAgEco => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.AGENTCDM));
    return fetchAgentCDM(codeAgEco)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.AGENTCDM, data)))
      .catch(error => dispatch(ActionFail(actionTypes.AGENTCDM, error)));
  };
};

//NatureJuridique
export const NatureJuridique = natureTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.NATUREJURIDIQUE));
    return fetchNatureJuridique(natureTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.NATUREJURIDIQUE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.NATUREJURIDIQUE, error)));
  };
};

//Situation Juridique
export const SituationJuridique = natureTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.ST_JURIDIQUE));
    return fetchSituationJuridique(natureTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.ST_JURIDIQUE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.ST_JURIDIQUE, error)));
  };
};

//Lieux CDM
export const LieuxCDM = typeFDC => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.LIEUXCDM));
    return fetchLieuxCDM(typeFDC)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.LIEUXCDM, data)))
      .catch(error => dispatch(ActionFail(actionTypes.LIEUXCDM, error)));
  };
};

export const ListLieuxCDM = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.LISTLIEUXCDM));
    return fetchListLieuxCDM()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.LISTLIEUXCDM, data)))
      .catch(error => dispatch(ActionFail(actionTypes.LISTLIEUXCDM, error)));
  };
};

//Fonds Commerce
export const FondsCommerces = code => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.FONDSCOMMERCE));
    return fetchFondsCommerce(code)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.FONDSCOMMERCE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.FONDSCOMMERCE, error)));
  };
};
//Fonds Commerce Gestion
export const FondsCommercesGestion = code => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.FONDSCOMMERCE));
    return fetchFondsCommerceGestion(code)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.FONDSCOMMERCE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.FONDSCOMMERCE, error)));
  };
};

//Fonds Commerce Operationnel
export const FondsCommercesOperationnel = code => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.FONDSCOMMERCEOPERATIONEL));
    return fetchFondsCommerceOperationnel(code)
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.FONDSCOMMERCEOPERATIONEL, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.FONDSCOMMERCEOPERATIONEL, error))
      );
  };
};

//Genres
export const Genres = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.GENRES));
    return fetchGenres()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.GENRES, data)))
      .catch(error => dispatch(ActionFail(actionTypes.GENRES, error)));
  };
};

//Qualites
export const Qualites = (natureTiers, genre) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.QUALITES));
    return fetchQualites(natureTiers, genre)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.QUALITES, data)))
      .catch(error => dispatch(ActionFail(actionTypes.QUALITES, error)));
  };
};

//Canaux EER

export const CanauxEER = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.CANAUXEER));
    return fetchCanauxEER()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.CANAUXEER, data)))
      .catch(error => dispatch(ActionFail(actionTypes.CANAUXEER, error)));
  };
};

//Origine EER
export const OrigineEER = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.ORIGINEEER));
    return fetchOrigineEER()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.ORIGINEEER, data)))
      .catch(error => dispatch(ActionFail(actionTypes.ORIGINEEER, error)));
  };
};

//Type convention
export const TypeConvention = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPECONVENTION));
    return fetchTypeConvention()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPECONVENTION, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPECONVENTION, error)));
  };
};

//List convention

export const ListConvention = code => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.LISTCONVENTION));
    return fetchListConvention(code)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.LISTCONVENTION, data)))
      .catch(error => dispatch(ActionFail(actionTypes.LISTCONVENTION, error)));
  };
};

//Type Beneficiaires

export const TypeBeneficiaire = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.BENEFICIAIRE));
    return fetchTypeBeneficiare()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.BENEFICIAIRE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.BENEFICIAIRE, error)));
  };
};

//Situation Familiale
export const SituationFamiliale = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.SITUATIONFAMILIALE));
    return fetchSituationFamiliale()
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.SITUATIONFAMILIALE, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.SITUATIONFAMILIALE, error))
      );
  };
};

//Matrimonial

export const Matrimonial = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.MATRIMONIAL));
    return fetchMatrimonial()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.MATRIMONIAL, data)))
      .catch(error => dispatch(ActionFail(actionTypes.MATRIMONIAL, error)));
  };
};

//PPE
export const PPE = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.AFFILIESPPE));
    return fetchPPE()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.AFFILIESPPE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.AFFILIESPPE, error)));
  };
};

//Nationalite
export const Nationalite = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.NATIONALITE));
    return fetchNationalite()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.NATIONALITE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.NATIONALITE, error)));
  };
};

//MOTIF EER
export const MotifEER = nature => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.MOTIFEER));
    return fetchMotifEER(nature)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.MOTIFEER, data)))
      .catch(error => dispatch(ActionFail(actionTypes.MOTIFEER, error)));
  };
};

//type tel
export const TypeTel = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPETEL));
    return fetchTypeTel()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPETEL, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPETEL, error)));
  };
};

//type Fax
export const TypeFax = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPEFAX));
    return fetchTypeFax()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPEFAX, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPEFAX, error)));
  };
};

//type Email
export const TypeEmail = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPEEMAIL));
    return fetchTypeEmail()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPEEMAIL, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPEEMAIL, error)));
  };
};

//Indicatif
export const Indicatif = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.INDICATIF));
    return fetchIndicatif()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.INDICATIF, data)))
      .catch(error => dispatch(ActionFail(actionTypes.INDICATIF, error)));
  };
};

//Devises
export const Devise = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.DEVISE));
    return fetchDevises()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.INDICATIF, data)))
      .catch(error => dispatch(ActionFail(actionTypes.INDICATIF, error)));
  };
};

//Cotation

export const Cotation = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.COTATION));
    return fetchCotation()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.COTATION, data)))
      .catch(error => dispatch(ActionFail(actionTypes.COTATION, error)));
  };
};

//CSP
export const CSP = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.CSP));
    return fetchCSP()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.CSP, data)))
      .catch(error => dispatch(ActionFail(actionTypes.CSP, error)));
  };
};

//Profession
export const Profession = code => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.CSPProfession));
    return fetchProfessions(code)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.CSPProfession, data)))
      .catch(error => dispatch(ActionFail(actionTypes.CSPProfession, error)));
  };
};

//Formation
export const Formation = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.Formation));
    return fetchFormation()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.Formation, data)))
      .catch(error => dispatch(ActionFail(actionTypes.Formation, error)));
  };
};

//Revenu
export const Revenu = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.REVENU));
    return fetchRevenu()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.REVENU, data)))
      .catch(error => dispatch(ActionFail(actionTypes.REVENU, error)));
  };
};

//Type Revenu
export const TypeRevenu = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPEREVENU));
    return fetchTypeRevenu()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPEREVENU, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPEREVENU, error)));
  };
};

//Client VIP
export const ClientVIP = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.CLIENTVIP));
    return fetchClientVIP()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.CLIENTVIP, data)))
      .catch(error => dispatch(ActionFail(actionTypes.CLIENTVIP, error)));
  };
};

//Type Compte
export const TypeCompte = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPECOMPTE));
    return fetchTypeCompte()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPECOMPTE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPECOMPTE, error)));
  };
};

//Banque marocaine
export const BanqueMarocaine = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.BANQUEMAROCAINE));
    return fetchBanqueMarocaine()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.BANQUEMAROCAINE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.BANQUEMAROCAINE, error)));
  };
};

//Regulateurs
export const Regulateurs = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.REGULATEURS));
    return fetchRegulateurs()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.REGULATEURS, data)))
      .catch(error => dispatch(ActionFail(actionTypes.REGULATEURS, error)));
  };
};

//Autorites
export const Autorites = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.AUTORITES));
    return fetchAutorites()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.AUTORITES, data)))
      .catch(error => dispatch(ActionFail(actionTypes.AUTORITES, error)));
  };
};

//MarchesFinanciers
export const MarchesFinanciers = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.MARCHESFINANCIERS));
    return fetchMarchesFinanciers()
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.MARCHESFINANCIERS, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.MARCHESFINANCIERS, error))
      );
  };
};

//Personnel Banque
export const PersonnelBanque = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.PERSONNELBANQUE));
    return fetchPersonnelBanque()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.PERSONNELBANQUE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.PERSONNELBANQUE, error)));
  };
};

//Entites Groupe
export const EntitesGroupe = code => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.ENTITESGROUPE));
    return fetchEntitesGroupe(code)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.ENTITESGROUPE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.ENTITESGROUPE, error)));
  };
};

//Types Logement
export const TypesLogement = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPESLOGEMENT));
    return fetchTypesLogement()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPESLOGEMENT, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPESLOGEMENT, error)));
  };
};

//Famille Equipement
export const FamillesEquipements = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.FAMILLEEQUIPEMENT));
    return fetchFamillesEquipements()
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.FAMILLEEQUIPEMENT, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.FAMILLEEQUIPEMENT, error))
      );
  };
};

//Famille Equipement
export const Equipements = (typeEquipement, natureTiers) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.EQUIPEMENT));
    return fetchEquipements(typeEquipement, natureTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.EQUIPEMENT, data)))
      .catch(error => dispatch(ActionFail(actionTypes.EQUIPEMENT, error)));
  };
};

//Equipements List
export const EquipementsList = list => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.EQUIPEMENT));
    return fetchEquipementsList(list)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.EQUIPEMENT, data)))
      .catch(error => dispatch(ActionFail(actionTypes.EQUIPEMENT, error)));
  };
};

//Sous Type Relation List
export const SousTypeRelationList = list => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.SOUSTYPERELATIONLIST));
    return fetchSousTypeRelationList(list)
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.SOUSTYPERELATIONLIST, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.SOUSTYPERELATIONLIST, error))
      );
  };
};

//HEURE PREFERE
export const HeurePrefere = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.HEUREPREFERE));
    return fetchHeurePrefere()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.HEUREPREFERE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.HEUREPREFERE, error)));
  };
};

//JOUR PREFERE
export const JourPrefere = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.JOURPREFERE));
    return fetchJourPrefere()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.JOURPREFERE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.JOURPREFERE, error)));
  };
};

//Canal PREFERE
export const CanalPrefere = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.CANALPREFERE));
    return fetchCanalPrefere()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.CANALPREFERE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.CANALPREFERE, error)));
  };
};

// PROGRAMME SANCTION
export const programmeSanctionAction = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.PROGRAMMESANCTION));
    return programmeSanction()
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.PROGRAMMESANCTION, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.PROGRAMMESANCTION, error))
      );
  };
};

//Obligatoire Identite
export const ObligatoireIdentite = code => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.OBLIGATOIREIDENTITE));
    return fetchObligatoireIdentite(code)
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.OBLIGATOIREIDENTITE, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.OBLIGATOIREIDENTITE, error))
      );
  };
};

//TypeRelation
export const TypesRelation = (
  natureTiers,
  natureTiersRel2,
  situationJuridique
) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPE_RELATION));
    return fetchTypesRelation(natureTiers, natureTiersRel2, situationJuridique)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPE_RELATION, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPE_RELATION, error)));
  };
};

export const TypesRelationParIntervenant = (natureTiers, natureIntervenant) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPE_RELATION));
    return fetchTypesRelationParIntervenant(natureTiers, natureIntervenant)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPE_RELATION, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPE_RELATION, error)));
  };
};

//SousTypesRelation
export const SousTypesRelation = code => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.SOUS_TYPE_RELATION));
    return fetchSousTypesRelation(code)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPE_RELATION, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPE_RELATION, error)));
  };
};

//typeIdentite
export const TypesIdentite = natureTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPE_IDENTITE));
    return fetchTypesIdentite(natureTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPE_IDENTITE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPE_IDENTITE, error)));
  };
};

//TypesIntervantion fetchTypesIntervantion
export const TypesIntervention = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPE_INTERVENTION));
    return fetchTypesIntervention()
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.TYPE_INTERVENTION, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.TYPE_INTERVENTION, error))
      );
  };
};

//PaysOs
export const PaysOs = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.PAYS_OS));
    return fetchPaysOs()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.PAYS_OS, data)))
      .catch(error => dispatch(ActionFail(actionTypes.PAYS_OS, error)));
  };
};

//SecteurActivite
export const SecteurActivite = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.SECTEUR_ACTIVITE));
    return fetchSecteurActivite()
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.SECTEUR_ACTIVITE, data)))
      .catch(error =>
        dispatch(ActionFail(actionTypes.SECTEUR_ACTIVITE, error))
      );
  };
};

//BrancheActivite
export const BrancheActivite = codeSecteur => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.BRANCHE_ACTIVITE));
    return fetchBrancheActivite(codeSecteur)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.BRANCHE_ACTIVITE, data)))
      .catch(error =>
        dispatch(ActionFail(actionTypes.BRANCHE_ACTIVITE, error))
      );
  };
};

//SousBrancheActivite
export const SousBrancheActivite = codeBranche => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.SOUS_BRANCHE_ACTIVITE));
    return fetchSousBrancheActivite(codeBranche)
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.SOUS_BRANCHE_ACTIVITE, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.SOUS_BRANCHE_ACTIVITE, error))
      );
  };
};

//Activite
export const Activite = codeSousBranche => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.ACTIVITE));
    return fetchActivites(codeSousBranche)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.ACTIVITE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.ACTIVITE, error)));
  };
};

//CodeActivite
export const CodeActivite = activiteBis => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.CODEACTIVITE));
    return fetchCodeActivite(activiteBis)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.CODEACTIVITE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.CODEACTIVITE, error)));
  };
};

//ImportateurExportateur
export const ImportateurExportateur = () => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.IMPORTATEUR_EXPORTATEUR));
    return fetchImportateurExportateur()
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.IMPORTATEUR_EXPORTATEUR, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.IMPORTATEUR_EXPORTATEUR, error))
      );
  };
};

//Type Tiers
export const typeTiersActions = (categorie) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPETIERS));
    return typeTiers(categorie)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPETIERS, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPETIERS, error)));
  };
};

//LocalBurDis
export const localBurDisActions = (ville, localite, codePostal) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.LOCALBURDIS));
    return localBurDis(ville, localite, codePostal)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.LOCALBURDIS, data)))
      .catch(error => dispatch(ActionFail(actionTypes.LOCALBURDIS, error)));
  };
};

//Ref LocalBurDis
export const refLocalBurDisActions = ref => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.REFLOCALBURDIS));
    return refLocalBurDis(ref)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.REFLOCALBURDIS, data)))
      .catch(error => dispatch(ActionFail(actionTypes.REFLOCALBURDIS, error)));
  };
};

//decode BurDis
export const DecodageBurDisActions = obj => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.REFLOCALBURDIS));
    return decodageBurDis(obj)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.REFLOCALBURDIS, data)))
      .catch(error => dispatch(ActionFail(actionTypes.REFLOCALBURDIS, error)));
  };
};

export const tiersActions = obj => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TIERS));
    return setTiers(obj);
  };
};

export const editTiersActions = obj => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TIERS));
    return editTiers(obj);
  };
};

export const getTiersActions = numeroTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.GETTYPETIERS));
    return getTiers(numeroTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.GETTYPETIERS, data)))
      .catch(error => dispatch(ActionFail(actionTypes.GETTYPETIERS, error)));
  };
};

export const tiersBrouillonActions = obj => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TIERSBROUILLON));
    return setTiersBrouillon(obj);
  };
};

export const getTiersBrouillonActions = numeroTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.GETTYPETIERS));
    return getTiersBrouillon(numeroTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.GETTYPETIERS, data)))
      .catch(error => dispatch(ActionFail(actionTypes.GETTYPETIERS, error)));
  };
};
//existe dans brouillon
export const existeInDraftActions = numeroTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.EXISTEINDRAFT));
    return existeInDraft(numeroTiers);
  };
};

//existe dans BCT
export const existeInBCT = numeroTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.EXISTEBTC));
    return existeBTCWithNumerotiers(numeroTiers);
  };
};

export const listDerogationAction = numeroTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.LISTDEROGATION));
    return listDerogation(numeroTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.LISTDEROGATION, data)))
      .catch(error => dispatch(ActionFail(actionTypes.LISTDEROGATION, error)));
  };
};

export const demandeDerogationAction = obj => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.DEMANDEDEROGATION));
    return demandeDerogation(obj);
  };
};

export const BFFActions = natureTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.BFF));
    return BFF(natureTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.BFF, data)))
      .catch(error => dispatch(ActionFail(actionTypes.BFF, error)));
  };
};

export const droitDeModifierTiersAction = numeroTiers => {
  return dispatch => {
    return droitDeModifierTiers(numeroTiers);
  };
};

export const droitDemandeDerogationAction = numeroTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.DROITDEMODIFIERTIERS));
    return droitDemandeDerogation(numeroTiers);
  };
};

export const droitDeConsultationDerogationAction = numeroTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.DROITDEMODIFIERTIERS));
    return droitDeConsultationDerogation(numeroTiers);
  };
};

export const documentsWithDerogationAction = obj => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.DOCUMENTSWITHDEROGATION));
    return documentsWithDerogation(obj)
      .then(res => res.json())
      .then(data =>
        dispatch(ActionSuccess(actionTypes.DOCUMENTSWITHDEROGATION, data))
      )
      .catch(error =>
        dispatch(ActionFail(actionTypes.DOCUMENTSWITHDEROGATION, error))
      );
  };
};

export const documentsAction = obj => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.DOCUMENTS));
    return documents(obj);
  };
};

export const uploadfile = (file, numtier, codedoc) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.UPLOADFILE));
    return fetchUploadfile(file, numtier, codedoc)
      .then(res => res.text())
      .then(data => dispatch(ActionSuccess(actionTypes.UPLOADFILE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.UPLOADFILE, error)));
  };
};

// Justificatif
export const getJustificatif = numeroTiers => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.GETJUSTIFICATIF));
    return fetchJustificatif(numeroTiers)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.GETJUSTIFICATIF, data)))
      .catch(error => dispatch(ActionFail(actionTypes.GETJUSTIFICATIF, error)));
  };
};

// get documents
export const getDocuments = reference => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.GETDOCUMENTS));
    return fetchValiderDocuments(reference);
  };
};

export const getDocumentInNewWindow = (reference, name) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.GETDOCUMENTS));
    return fetchValiderDocuments(reference)
      .then(resp => resp.arrayBuffer())
      .then(response => {
        var fileName = `${name}.pdf`
        var blob = new Blob([response], { type: "application/pdf" });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob, fileName);
        }
        var url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        var downloadUrl = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = downloadUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(downloadUrl);
      })
      .then(() => dispatch(ActionSuccess(actionTypes.GETDOCUMENTS)))
      .catch(error => dispatch(ActionFail(actionTypes.GETDOCUMENTS, error)));
  }
}

// delete ref documents
export const deletedocuments = obj => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.DELETEDOCUMENTS));
    return deleteReferenceDocuments(obj)
      .then(res => res.text())
      .then(data => dispatch(ActionSuccess(actionTypes.DELETEDOCUMENTS, data)))
      .catch(error => dispatch(ActionFail(actionTypes.DELETEDOCUMENTS, error)));
  };
};
