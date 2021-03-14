Search.setIndex({docnames:["CHANGELOG","CONTRIBUTING","LICENSE","api_reference","index","quickstart","stubs/imctoolkit.ImageSingleCellData","stubs/imctoolkit.MultichannelImage","stubs/imctoolkit.SpatialCellGraph","stubs/imctoolkit.utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["CHANGELOG.md","CONTRIBUTING.md","LICENSE.md","api_reference.rst","index.md","quickstart.rst","stubs/imctoolkit.ImageSingleCellData.rst","stubs/imctoolkit.MultichannelImage.rst","stubs/imctoolkit.SpatialCellGraph.rst","stubs/imctoolkit.utils.rst"],objects:{"imctoolkit.ImageSingleCellData":{DEFAULT_REGION_PROPERTIES:[6,1,1,""],RegionProperties:[6,0,1,""],__init__:[6,2,1,""],cell_centroids:[6,2,1,""],cell_ids:[6,2,1,""],channel_names:[6,2,1,""],compute_cell_border_distances:[6,2,1,""],compute_cell_centroid_distances:[6,2,1,""],compute_cell_intensities:[6,2,1,""],image_height:[6,2,1,""],image_width:[6,2,1,""],max_intensities:[6,2,1,""],max_intensities_table:[6,2,1,""],mean_intensities:[6,2,1,""],mean_intensities_table:[6,2,1,""],median_intensities:[6,2,1,""],median_intensities_table:[6,2,1,""],min_intensities:[6,2,1,""],min_intensities_table:[6,2,1,""],num_cells:[6,2,1,""],num_channels:[6,2,1,""],regionprops:[6,2,1,""],regionprops_table:[6,2,1,""],std_intensities:[6,2,1,""],std_intensities_table:[6,2,1,""],to_anndata:[6,2,1,""],to_dataframe:[6,2,1,""],to_dataset:[6,2,1,""],var_intensities:[6,2,1,""],var_intensities_table:[6,2,1,""],write_csv:[6,2,1,""],write_fcs:[6,2,1,""]},"imctoolkit.ImageSingleCellData.RegionProperties":{AREA:[6,1,1,""],BBOX:[6,1,1,""],BBOX_AREA:[6,1,1,""],CONVEX_AREA:[6,1,1,""],CONVEX_IMAGE:[6,1,1,""],COORDS:[6,1,1,""],ECCENTRICITY:[6,1,1,""],EQUIVALENT_DIAMETER:[6,1,1,""],EULER_NUMBER:[6,1,1,""],EXTENT:[6,1,1,""],FILLED_AREA:[6,1,1,""],FILLED_IMAGE:[6,1,1,""],IMAGE:[6,1,1,""],INERTIA_TENSOR:[6,1,1,""],INERTIA_TENSOR_EIGVALS:[6,1,1,""],LOCAL_CENTROID:[6,1,1,""],MAJOR_AXIS_LENGTH:[6,1,1,""],MINOR_AXIS_LENGTH:[6,1,1,""],MOMENTS:[6,1,1,""],MOMENTS_CENTRAL:[6,1,1,""],MOMENTS_HU:[6,1,1,""],MOMENTS_NORMALIZED:[6,1,1,""],ORIENTATION:[6,1,1,""],PERIMETER:[6,1,1,""],SLICE:[6,1,1,""],SOLIDITY:[6,1,1,""]},"imctoolkit.ImageSingleCellData.compute_cell_centroid_distances.params":{metric:[6,3,1,""]},"imctoolkit.ImageSingleCellData.compute_cell_intensities.params":{aggr:[6,3,1,""]},"imctoolkit.ImageSingleCellData.params":{channel_names:[6,3,1,""],img:[6,3,1,""],mask:[6,3,1,""],region_properties:[6,3,1,""]},"imctoolkit.ImageSingleCellData.to_anndata.params":{cell_channel_properties:[6,3,1,""],cell_properties:[6,3,1,""]},"imctoolkit.ImageSingleCellData.to_dataframe.params":{cell_channel_properties:[6,3,1,""],cell_properties:[6,3,1,""]},"imctoolkit.ImageSingleCellData.to_dataset.params":{cell_channel_properties:[6,3,1,""],cell_properties:[6,3,1,""]},"imctoolkit.ImageSingleCellData.write_csv.params":{kwargs:[6,3,1,""],path:[6,3,1,""]},"imctoolkit.ImageSingleCellData.write_fcs.params":{kwargs:[6,3,1,""],path:[6,3,1,""]},"imctoolkit.MultichannelImage":{__init__:[7,2,1,""],channel_names:[7,2,1,""],copy:[7,2,1,""],height:[7,2,1,""],num_channels:[7,2,1,""],read:[7,2,1,""],read_imc_mcd:[7,2,1,""],read_imc_txt:[7,2,1,""],read_tiff:[7,2,1,""],width:[7,2,1,""],write_ome_tiff:[7,2,1,""]},"imctoolkit.MultichannelImage.params":{channel_names:[7,3,1,""],data:[7,3,1,""]},"imctoolkit.MultichannelImage.read.params":{kwargs:[7,3,1,""],path:[7,3,1,""]},"imctoolkit.MultichannelImage.read_imc_mcd.params":{acquisition_id:[7,3,1,""],channel_names_attr:[7,3,1,""],path:[7,3,1,""]},"imctoolkit.MultichannelImage.read_imc_txt.params":{channel_names_attr:[7,3,1,""],path:[7,3,1,""]},"imctoolkit.MultichannelImage.read_tiff.params":{channel_names:[7,3,1,""],ome_channel_name_attr:[7,3,1,""],panel:[7,3,1,""],panel_channel_index_col:[7,3,1,""],panel_channel_name_col:[7,3,1,""],path:[7,3,1,""]},"imctoolkit.MultichannelImage.write_ome_tiff.params":{kwargs:[7,3,1,""],path:[7,3,1,""]},"imctoolkit.SpatialCellGraph":{__init__:[8,2,1,""],cell_ids:[8,2,1,""],construct_dist_graph:[8,2,1,""],construct_knn_graph:[8,2,1,""],feature_names:[8,2,1,""],is_undirected:[8,2,1,""],load_dataset:[8,2,1,""],num_cells:[8,2,1,""],num_features:[8,2,1,""],to_dataset:[8,2,1,""],to_igraph:[8,2,1,""],to_networkx:[8,2,1,""]},"imctoolkit.SpatialCellGraph.construct_dist_graph.params":{cell_channel_properties:[8,3,1,""],cell_properties:[8,3,1,""],data:[8,3,1,""],dist_mat:[8,3,1,""],dist_thres:[8,3,1,""]},"imctoolkit.SpatialCellGraph.construct_knn_graph.params":{cell_channel_properties:[8,3,1,""],cell_properties:[8,3,1,""],data:[8,3,1,""],dist_mat:[8,3,1,""],k:[8,3,1,""]},"imctoolkit.SpatialCellGraph.load_dataset.params":{dataset:[8,3,1,""]},"imctoolkit.SpatialCellGraph.params":{adj_mat:[8,3,1,""],cell_channel_properties:[8,3,1,""],cell_properties:[8,3,1,""],data:[8,3,1,""]},"imctoolkit.SpatialCellGraph.to_igraph.params":{mode:[8,3,1,""]},"imctoolkit.SpatialCellGraph.to_networkx.params":{create_using:[8,3,1,""],weight_mat:[8,3,1,""]},"imctoolkit.utils":{gaussian_filter_cv2:[9,5,1,""],hot_pixel_filter:[9,5,1,""],median_filter_cv2:[9,5,1,""],rotate_centered_cv2:[9,5,1,""],to_table:[9,5,1,""]},"imctoolkit.utils.gaussian_filter_cv2.params":{img:[9,3,1,""],inplace:[9,3,1,""],sigma:[9,3,1,""],size:[9,3,1,""]},"imctoolkit.utils.hot_pixel_filter.params":{hot_pixel_thres:[9,3,1,""],img:[9,3,1,""],inplace:[9,3,1,""]},"imctoolkit.utils.median_filter_cv2.params":{img:[9,3,1,""],inplace:[9,3,1,""],size:[9,3,1,""]},"imctoolkit.utils.rotate_centered_cv2.params":{angle:[9,3,1,""],border_mode:[9,3,1,""],expand_bbox:[9,3,1,""],img:[9,3,1,""],inplace:[9,3,1,""]},"imctoolkit.utils.to_table.params":{arr:[9,3,1,""]},imctoolkit:{ImageSingleCellData:[6,0,1,""],MultichannelImage:[7,0,1,""],SpatialCellGraph:[8,0,1,""],utils:[9,4,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","parameter","Python parameter"],"4":["py","module","Python module"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:parameter","4":"py:module","5":"py:function"},terms:{"2016":7,"2020":4,"2021":2,"boolean":8,"class":[5,6,7,8],"default":[5,6,7,8],"export":[4,5],"float":[8,9],"function":[5,6,7],"import":5,"int":[6,7,8,9],"new":[7,8],"public":0,"return":[5,6,7,8,9],"static":[7,8],"true":[5,6,8,9],"while":5,AND:2,BUT:2,FCS:[4,6],FOR:2,For:[1,5,6],IDs:[6,8],NOT:2,OME:7,THE:2,The:[0,2,5,7,9],These:5,USE:2,Uses:[6,7],Using:4,WITH:2,__init__:[5,6,7,8],_skip_data_prepar:8,_tabl:5,abov:[2,4],accept:5,access:5,accessor:6,achiev:5,acquisit:[5,7],acquisition_id:7,acquisitiondata:7,across:7,act:7,action:2,addit:5,adher:0,adj_direct:8,adj_mat:8,adj_undirect:8,adjac:[5,8],aggr:6,aggreg:6,agnost:5,all:[0,2,4,5,6,8,9],also:[4,5],analysi:5,angl:9,ani:[2,5,6,7],anndata:[4,5,6],api:[4,6],appropri:[1,5],area:6,argument:[6,7],aris:2,around:9,arr:9,arrai:[6,9],aspect:5,associ:2,attribut:[5,7,8],author:2,avail:[4,5],background:6,base:[0,7],basic:5,bbox:6,bbox_area:6,below:8,between:6,blur:9,bodenmil:2,bodenmillergroup:[4,9],bool:[6,8,9],border:6,border_mod:9,both:5,bound:9,box:9,bridg:5,build:5,cach:5,call:5,callabl:6,can:5,cell:[4,6,8],cell_centroid:6,cell_channel_properti:[5,6,8],cell_i:8,cell_id:[6,8],cell_j:8,cell_properti:[5,6,8],cellprofil:5,center:9,centroid:6,chang:[0,1],channel:[4,5,6,7,8],channel_label:7,channel_nam:[5,6,7],channel_names_attr:7,charg:2,claim:2,classmethod:[7,8],collect:8,column:[6,7,8],com:9,comput:[5,6],compute_border_dist:5,compute_cell_border_dist:6,compute_cell_centroid_dist:6,compute_cell_intens:6,condit:2,connect:2,consid:8,construct:[4,8],construct_:5,construct_dist_graph:[5,8],construct_knn_graph:8,contain:[5,9],context:4,contract:2,conveni:5,convert:9,convex_area:6,convex_imag:6,coord:6,coordin:[6,7,8],copi:[2,7],copyright:2,core:5,correspond:5,could:5,cover:5,creat:[5,7,8],create_us:8,csv:6,current:[6,7,8],custom:5,cv2:9,cytometri:5,damag:2,data:[4,6,7,8,9],dataarrai:[5,6,7,8,9],datafram:[5,6,7,8,9],dataset:[6,8],deal:2,deep:7,default_region_properti:[5,6],defin:9,degre:9,depend:[4,5],descript:6,determin:7,develop:5,deviat:[6,9],digraph:8,dimens:[6,7],dimension:9,direct:8,discuss:1,dist_mat:[5,8],dist_thr:8,distanc:[6,8],distribut:2,doc:6,document:[0,1,2,4,7],doe:5,downstream:5,eccentr:6,edg:8,either:5,element:7,embed:7,enabl:5,enumer:6,environ:4,equivalent_diamet:6,euclidean:6,euler_numb:6,evalu:5,event:2,exampl:5,expand:9,expand_bbox:9,expos:5,express:2,extens:7,extent:6,extern:5,extract:[4,7],extrapol:9,fals:[6,8,9],fast:9,faster:4,fcs:6,fcswrite:[4,6],featur:8,feature_nam:8,file:[0,2,4,5,6,7],filled_area:6,filled_imag:6,filter:9,first:[1,5],fit:2,fluidigm:7,focu:5,focus:5,follow:[2,5],format:[0,5,6,8],framework:5,free:2,from:[2,5,7,8],from_numpy_arrai:8,full:9,furnish:2,further:5,gaussian:9,gaussian_filter_cv2:9,gener:[5,6,7],github:[4,9],given:5,grant:2,graph:[4,8],graphml:5,h5ad:5,has:6,heavi:5,height:[6,7],herebi:2,hold:5,holder:2,hot:9,hot_pixel_filt:9,hot_pixel_thr:[8,9],howev:5,html:[6,7],http:[4,6,7,9],ident:7,iff:8,igraph:[4,8],imag:[4,6,7,9],image_height:6,image_width:6,imagesinglecelldata:[4,5],imc:5,imcpluginscp:9,imctool:7,imctoolkit:5,img:[5,6,9],implement:9,impli:2,imread:5,includ:[2,4,5,6,8],index:[6,7,8],indic:[6,7],inertia_tensor:6,inertia_tensor_eigv:6,inform:5,initi:[0,7],inplac:9,instanc:[5,6,7,8],instanti:5,integ:6,intens:[5,6,8],interoper:5,is_undirect:8,issu:1,its:[4,5,8,9],jona:4,just:5,keep:0,kernel:9,keyword:7,kind:2,kwarg:[6,7],lab:2,label:8,larger:9,later:4,layer:6,lazi:5,least:6,liabil:2,liabl:2,lies:5,like:[1,6,7,8],limit:2,list:[4,5,6,8],load:4,load_dataset:8,local_centroid:6,main:5,major:1,major_axis_length:6,make:1,map:7,mask:[5,6],mass:5,match:7,matrix:[5,6,8],max_intens:6,max_intensities_t:6,maximum:[6,9],mcd:7,mcdparser:7,mean:[5,6],mean_intens:6,mean_intensities_:6,mean_intensities_t:[5,6],measur:6,median:[6,9],median_filter_cv2:9,median_intens:6,median_intensities_t:6,member:8,memori:5,merchant:2,merg:2,metadata:0,method:9,metric:6,min_intens:6,min_intensities_t:6,minimum:6,minor:0,minor_axis_length:6,mit:[2,4],modal:5,mode:8,modifi:[2,9],moment:6,moments_centr:6,moments_hu:6,moments_norm:6,most:5,multi:[4,6,7],multichannelimag:[4,5,6,9],multiplex:5,multipli:8,must:9,n_channel:7,name:[5,6,7,8],ndarrai:[6,7,8,9],nearest:8,neighbor:8,neighborhood:[5,8,9],networkx:[4,8],node:[5,8],non:6,none:[6,7,8],noninfring:2,notabl:0,note:7,notic:2,num_cel:[6,8],num_channel:[6,7],num_featur:8,number:[5,6,7,8],numpi:6,object:[4,5,6,8,9],observ:6,obtain:2,odd:9,ome:[5,7],ome_channel_name_attr:7,one:6,onli:5,open:1,opencv:[4,9],openmicroscopi:7,oper:5,option:[4,6,7,8],org:[6,7],orient:6,other:[2,5,6,7],otherwis:[2,8],out:2,overrid:7,packag:[4,5],pair:5,pairwis:6,panda:[5,6,7,8,9],panel:7,panel_channel_index_col:7,panel_channel_name_col:7,paramet:[5,6,7,8,9],particular:2,pass:[6,7],path:[5,6,7],pdist:6,per:5,perimet:6,permiss:2,permit:2,person:2,pip:4,pipelin:5,pixel:[6,7,9],place:9,pleas:1,popular:5,portion:2,possibl:9,potenti:7,power:5,prefix:6,print:5,process:[4,5,7],project:0,properti:[5,6,7,8],property_nam:6,provid:[2,5],publish:2,pull:1,pure:5,purpos:2,pypi:0,python:[4,5],quickstart:4,rang:[5,7],raw:[5,7,9],read:7,read_:7,read_csv:7,read_imc_mcd:7,read_imc_txt:7,read_tiff:[5,7],recommend:4,refer:[4,6],region:[5,6],region_properti:[5,6],regionprop:[6,8],regionproperti:6,regionprops_t:[5,6],releas:0,reli:5,represent:[6,8,9],request:1,requir:5,resourc:5,respect:7,restrict:[2,5],result:[5,9],right:2,rotat:9,rotate_centered_cv2:9,row:8,same:[5,8],schema:7,scikit:[5,6],scipi:6,see:[4,6,7,8,9],segment:[4,5],selector:7,sell:2,semant:0,sequenc:[6,7,8],set:[6,8,9],shall:2,shape:[6,7,8,9],sigma:9,simpli:5,singl:[4,6,8],singlecelldata:8,size:9,skimag:6,slice:6,slide:7,softwar:2,sole:5,solid:6,spatial:[4,6,8],spatialcellgraph:[4,5],spatialsinglecelldata:5,specif:[5,6],specifi:7,squidpi:5,standard:[6,9],std_intens:6,std_intensities_t:6,store:6,str:[6,7,8],strictli:8,strongli:4,subject:2,sublicens:2,subset:5,substanti:2,suffici:5,suffix:5,support:[5,6],sure:1,symmetr:[6,8],taken:7,task:5,test:1,than:9,thi:[0,2,4,5,6],threshold:[8,9],through:5,thu:5,tiff:[5,7],tifffil:[5,7],time:5,to_anndata:[5,6],to_csv:6,to_datafram:6,to_dataset:[6,8],to_igraph:[5,8],to_networkx:8,to_tabl:9,to_tiff:7,togeth:7,tool:5,tort:2,two:9,txt:[4,7],txtparser:7,type:[5,6,7,8,9],undirect:8,union:[6,7,8,9],uniqu:7,unlik:5,updat:1,upon:5,use:[2,5,6],used:5,using:[5,7,8,9],util:4,uzh:4,valu:[6,8,9],var_intens:6,var_intensities_t:6,variabl:[6,7,8],varianc:6,varieti:5,version:0,vertex:8,virtual:4,warpaffin:9,warranti:2,weight:8,weight_mat:8,welcom:1,what:1,when:[6,7,8,9],where:6,whether:2,which:[5,6,7,8],whom:2,whose:9,width:[6,7],windhag:4,wise:5,without:[2,5],would:[1,6],write:[4,5,6,7],write_csv:6,write_fc:6,write_graphml:5,write_ome_tiff:7,written:[6,7],www:7,xarrai:[5,6,7,8,9],xml:7,xtiff:7,you:1,zero:6},titles:["Changelog","Contributing","License","API reference","imctoolkit","Quickstart","imctoolkit.ImageSingleCellData","imctoolkit.MultichannelImage","imctoolkit.SpatialCellGraph","imctoolkit.utils"],titleterms:{"2020":0,api:3,author:4,cell:5,changelog:[0,4],construct:5,content:4,context:5,contribut:[1,4],data:5,extract:5,graph:5,imag:5,imagesinglecelldata:6,imctoolkit:[4,6,7,8,9],instal:4,licens:[2,4],load:5,multichannelimag:7,quickstart:5,refer:3,requir:4,singl:5,spatial:5,spatialcellgraph:8,usag:4,util:9}})